import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {Source_ImageLayoutStore} from './source_image_layout_store';
import type {Mirror_TwinsLayoutStore} from './mirror_twins_layout_store';
import type {Source_ImageSelectionStore} from './source_image_selection_store';

export interface Mirror_ImagesLayoutStore {
	subscribe: Readable<null | Mirror_ImagesLayout>['subscribe'];
}

// These dimensions are scaled to rendered screen coordinates.
export interface Mirror_ImagesLayout {
	scale: number;
	imageWidth: number;
	imageHeight: number;
}

export const createMirror_ImagesLayoutStore = (
	layout: Mirror_TwinsLayoutStore,
	sourceImageLayout: Source_ImageLayoutStore,
	sourceImageSelection: Source_ImageSelectionStore,
): Mirror_ImagesLayoutStore => {
	const {subscribe} = derived<
		[Mirror_TwinsLayoutStore, Source_ImageLayoutStore, Source_ImageSelectionStore],
		Mirror_ImagesLayout | null
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
