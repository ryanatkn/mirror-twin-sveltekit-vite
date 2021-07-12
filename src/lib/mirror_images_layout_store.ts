import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {Source_Image_Layout_Store} from './source_image_layout_store';
import type {Mirror_Twins_Layout_Store} from './mirror_twins_layout_store';
import type {Source_Image_Selection_Store} from './source_image_selection_store';

export interface Mirror_Images_Layout_Store {
	subscribe: Readable<null | Mirror_Images_Layout>['subscribe'];
}

// These dimensions are scaled to rendered screen coordinates.
export interface Mirror_Images_Layout {
	scale: number;
	image_width: number;
	image_height: number;
}

export const create_mirror_images_layout_store = (
	layout: Mirror_Twins_Layout_Store,
	source_image_layout: Source_Image_Layout_Store,
	source_image_selection: Source_Image_Selection_Store,
): Mirror_Images_Layout_Store => {
	const {subscribe} = derived<
		[Mirror_Twins_Layout_Store, Source_Image_Layout_Store, Source_Image_Selection_Store],
		Mirror_Images_Layout | null
	>(
		[layout, source_image_layout, source_image_selection],
		([$layout, $source_image_layout, $source_image_selection]) => {
			if (!$layout || !$source_image_layout || !$source_image_selection) {
				return null;
			}

			// get the selected portion of the image,
			// and convert it back to the unscaled image coordinates
			const scale = Math.min(
				1,
				$layout.mirror_container_width / 2 / $source_image_selection.width,
				$layout.mirror_container_height / $source_image_selection.height,
			);
			const image_width = Math.floor($source_image_selection.width * scale);
			const image_height = Math.floor($source_image_selection.height * scale);
			return {
				scale,
				image_height,
				image_width,
			};
		},
	);

	return {
		subscribe,
	};
};
