import {derived} from 'svelte/store';
import type {Readable} from 'svelte/store';

import type {SourceImageLayoutStore} from './sourceImageLayoutStore';
import type {ImageHandlesStore} from './imageHandlesStore';

export interface SourceImageSelectionStore {
	subscribe: Readable<null | SourceImageSelection>['subscribe'];
}

// These dimensions are with respect to the unscaled image.
export interface SourceImageSelection {
	width: number;
	height: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export const createSourceImageSelectionStore = (
	sourceImageLayout: SourceImageLayoutStore,
	handles: ImageHandlesStore,
): SourceImageSelectionStore => {
	const {subscribe} = derived<
		[SourceImageLayoutStore, ImageHandlesStore],
		SourceImageSelection | null
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
