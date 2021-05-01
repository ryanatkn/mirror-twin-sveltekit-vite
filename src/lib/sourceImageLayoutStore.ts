import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {MirrorTwinsLayoutStore} from './mirrorTwinsLayoutStore';

export interface SourceImageLayoutStore {
	subscribe: Readable<null | SourceImageLayout>['subscribe'];
}

// Except for wrapperWidth and wrapperHeight,
// these dimensions are scaled to rendered screen coordinates.
export interface SourceImageLayout {
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

export const createSourceImageLayoutStore = (
	layout: MirrorTwinsLayoutStore,
): SourceImageLayoutStore => {
	const {subscribe} = derived<MirrorTwinsLayoutStore, SourceImageLayout | null>(
		layout,
		($layout) => {
			if (!$layout) return null;

			const availableImageWidth = $layout.sourceContainerWidth - PADDING_LEFT - PADDING_RIGHT;

			const availableImageHeight = $layout.sourceContainerHeight - PADDING_TOP - PADDING_BOTTOM;

			const scale = Math.min(
				1,
				availableImageWidth / $layout.imageWidth,
				availableImageHeight / $layout.imageHeight,
			);
			const width = Math.floor($layout.imageWidth * scale);
			const height = Math.floor($layout.imageHeight * scale);

			const x1 = Math.floor(
				$layout.sourceContainerWidth / 2 - width / 2 + (PADDING_LEFT - PADDING_RIGHT),
			);
			const x2 = x1 + width;
			const y1 = $layout.sourceContainerHeight - height;
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
