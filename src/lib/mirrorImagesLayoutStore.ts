import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {SourceImageLayoutStore} from './sourceImageLayoutStore';
import type {MirrorTwinsLayoutStore} from './mirrorTwinsLayoutStore';
import type {SourceImageSelectionStore} from './sourceImageSelectionStore';

export interface MirrorImagesLayoutStore {
	subscribe: Readable<null | MirrorImagesLayout>['subscribe'];
}

// These dimensions are scaled to rendered screen coordinates.
export interface MirrorImagesLayout {
	scale: number;
	imageWidth: number;
	imageHeight: number;
}

export const createMirrorImagesLayoutStore = (
	layout: MirrorTwinsLayoutStore,
	sourceImageLayout: SourceImageLayoutStore,
	sourceImageSelection: SourceImageSelectionStore,
): MirrorImagesLayoutStore => {
	const {subscribe} = derived<
		[MirrorTwinsLayoutStore, SourceImageLayoutStore, SourceImageSelectionStore],
		MirrorImagesLayout | null
	>(
		[layout, sourceImageLayout, sourceImageSelection],
		([$layout, $sourceImageLayout, $sourceImageSelection]) => {
			if (!$layout || !$sourceImageLayout || !$sourceImageSelection) {
				return null;
			}

			// get the selected portion of the image,
			// and convert it back to the unscaled image coordinates
			const scale = Math.min(
				1,
				$layout.mirrorContainerWidth / 2 / $sourceImageSelection.width,
				$layout.mirrorContainerHeight / $sourceImageSelection.height,
			);
			const imageWidth = Math.floor($sourceImageSelection.width * scale);
			const imageHeight = Math.floor($sourceImageSelection.height * scale);
			return {
				scale,
				imageHeight,
				imageWidth,
			};
		},
	);

	return {
		subscribe,
	};
};
