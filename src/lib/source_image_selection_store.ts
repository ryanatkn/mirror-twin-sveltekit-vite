import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {Source_Image_Layout_Store} from './source_image_layout_store';
import type {Image_Handles_Store} from './image_handles_store';

export interface Source_Image_Selection_Store {
	subscribe: Readable<null | Source_Image_Selection>['subscribe'];
}

// These dimensions are with respect to the unscaled image.
export interface Source_Image_Selection {
	width: number;
	height: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export const create_source_image_selection_store = (
	source_image_layout: Source_Image_Layout_Store,
	handles: Image_Handles_Store,
): Source_Image_Selection_Store => {
	const {subscribe} = derived<
		[Source_Image_Layout_Store, Image_Handles_Store],
		Source_Image_Selection | null
	>([source_image_layout, handles], ([$source_image_layout, $handles]) => {
		if (!$source_image_layout) return null;
		const {scale} = $source_image_layout;
		const x1 = Math.round($handles.x1 / scale);
		const x2 = Math.round($handles.x2 / scale);
		const y1 = Math.round($handles.y1 / scale);
		const y2 = Math.round($handles.y2 / scale);
		const width = x2 - x1;
		const height = y2 - y1;
		return {
			width,
			height,
			x1,
			x2,
			y1,
			y2,
		};
	});

	return {
		subscribe,
	};
};
