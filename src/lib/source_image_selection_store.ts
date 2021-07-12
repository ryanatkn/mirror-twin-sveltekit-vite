import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {Source_ImageLayoutStore} from './source_image_layout_store';
import type {Image_HandlesStore} from './image_handles_store';

export interface Source_ImageSelectionStore {
	subscribe: Readable<null | Source_ImageSelection>['subscribe'];
}

// These dimensions are with respect to the unscaled image.
export interface Source_ImageSelection {
	width: number;
	height: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export const createSource_ImageSelectionStore = (
	sourceImageLayout: Source_ImageLayoutStore,
	handles: Image_HandlesStore,
): Source_ImageSelectionStore => {
	const {subscribe} = derived<
		[Source_ImageLayoutStore, Image_HandlesStore],
		Source_ImageSelection | null
	>([sourceImageLayout, handles], ([$sourceImageLayout, $handles]) => {
		if (!$sourceImageLayout) return null;
		const {scale} = $sourceImageLayout;
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
