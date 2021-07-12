import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {Mirror_Twins_Layout_Store} from './mirror_twins_layout_store';

export interface Source_Image_Layout_Store {
	subscribe: Readable<null | Source_Image_Layout>['subscribe'];
}

// Except for wrapperWidth and wrapperHeight,
// these dimensions are scaled to rendered screen coordinates.
export interface Source_Image_Layout {
	scale: number;
	width: number;
	height: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

// TODO parameterize - store dep?
const BUTTON_SIZE = 40;
const HANDLE_SIZE = 40;
const PADDING_LEFT = HANDLE_SIZE / 2;
const PADDING_RIGHT = HANDLE_SIZE / 2;
const PADDING_TOP = BUTTON_SIZE + HANDLE_SIZE / 2;
const PADDING_BOTTOM = 0;

export const create_source_image_layout_store = (
	layout: Mirror_Twins_Layout_Store,
): Source_Image_Layout_Store => {
	const {subscribe} = derived<Mirror_Twins_Layout_Store, Source_Image_Layout | null>(
		layout,
		($layout) => {
			if (!$layout) return null;

			const available_image_width = $layout.source_container_width - PADDING_LEFT - PADDING_RIGHT;

			const available_image_height = $layout.source_container_height - PADDING_TOP - PADDING_BOTTOM;

			const scale = Math.min(
				1,
				available_image_width / $layout.image_width,
				available_image_height / $layout.image_height,
			);
			const width = Math.floor($layout.image_width * scale);
			const height = Math.floor($layout.image_height * scale);

			const x1 = Math.floor(
				$layout.source_container_width / 2 - width / 2 + (PADDING_LEFT - PADDING_RIGHT),
			);
			const x2 = x1 + width;
			const y1 = $layout.source_container_height - height;
			const y2 = y1 + height;

			return {
				scale,
				width,
				height,
				x1,
				x2,
				y1,
				y2,
			};
		},
	);

	return {
		subscribe,
	};
};
