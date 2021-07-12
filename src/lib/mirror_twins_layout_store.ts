import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

import type {Image_Info} from './images_store';

export interface Mirror_Twins_Layout_Store {
	subscribe: Writable<null | Mirror_Twins_Layout>['subscribe'];
	compute: (image: Image_Info, width: number, height: number) => void;
}

// These dimensions are unscaled screen coordinates.
export interface Mirror_Twins_Layout {
	width: number;
	height: number;
	image_width: number;
	image_height: number;
	source_container_width: number;
	source_container_height: number;
	mirror_container_width: number;
	mirror_container_height: number;
}

// TODO make this a derived store? keep at the top level or move up the tree?
// maybe split into individual reactive declarations?
// maybe make it a renderless component?
// TODO the `layout` value is derived from the container and selected image sizes
// it's needed for both the main image and the sub images, and includes the layout
// information of how much space is given to each section, and assumes the vertical layout
// TODO rename? `layout`?
export const create_mirror_twins_layout_store = (): Mirror_Twins_Layout_Store => {
	const {subscribe, set} = writable<null | Mirror_Twins_Layout>(null);

	return {
		subscribe,
		compute: (image, width, height) => {
			const layout = compute_layout(image, width, height);
			set(layout);
		},
	};
};

// TODO hardcoded or parameterized?
const SOURCE_IMAGE_HEIGHT_PCT = 0.5;

const compute_layout = (image: Image_Info, width: number, height: number): Mirror_Twins_Layout => {
	if (image.width === null) {
		throw Error(`Cannot compute layout with unloaded image data: ${image.name}`);
	}
	const image_width = image.width;
	const image_height = image.height!;

	const source_container_width = width;
	const source_container_height = Math.round(height * SOURCE_IMAGE_HEIGHT_PCT);
	const mirror_container_width = width;
	const mirror_container_height = height - source_container_height;

	return {
		width,
		height,
		image_width,
		image_height,
		source_container_width,
		source_container_height,
		mirror_container_width,
		mirror_container_height,
	};
};
