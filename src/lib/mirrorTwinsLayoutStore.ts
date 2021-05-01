import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

import type {ImageInfo} from './imagesStore';

export interface MirrorTwinsLayoutStore {
	subscribe: Writable<null | MirrorTwinsLayout>['subscribe'];
	compute: (image: ImageInfo, width: number, height: number) => void;
}

// These dimensions are unscaled screen coordinates.
export interface MirrorTwinsLayout {
	width: number;
	height: number;
	imageWidth: number;
	imageHeight: number;
	sourceContainerWidth: number;
	sourceContainerHeight: number;
	mirrorContainerWidth: number;
	mirrorContainerHeight: number;
}

// TODO make this a derived store? keep at the top level or move up the tree?
// maybe split into individual reactive declarations?
// maybe make it a renderless component?
// TODO the `layout` value is derived from the container and selected image sizes
// it's needed for both the main image and the sub images, and includes the layout
// information of how much space is given to each section, and assumes the vertical layout
// TODO rename? `layout`?
export const createMirrorTwinsLayoutStore = (): MirrorTwinsLayoutStore => {
	const {subscribe, set} = writable<null | MirrorTwinsLayout>(null);

	return {
		subscribe,
		compute: (image, width, height) => {
			const layout = computeLayout(image, width, height);
			set(layout);
		},
	};
};

// TODO hardcoded or parameterized?
const SOURCE_IMAGE_HEIGHT_PCT = 0.5;

const computeLayout = (image: ImageInfo, width: number, height: number): MirrorTwinsLayout => {
	if (image.width === null) {
		throw Error(`Cannot compute layout with unloaded image data: ${image.name}`);
	}
	const imageWidth = image.width;
	const imageHeight = image.height!;

	const sourceContainerWidth = width;
	const sourceContainerHeight = Math.round(height * SOURCE_IMAGE_HEIGHT_PCT);
	const mirrorContainerWidth = width;
	const mirrorContainerHeight = height - sourceContainerHeight;

	return {
		width,
		height,
		imageWidth,
		imageHeight,
		sourceContainerWidth,
		sourceContainerHeight,
		mirrorContainerWidth,
		mirrorContainerHeight,
	};
};
