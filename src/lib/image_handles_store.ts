import {derived} from 'svelte/store';
import type {Writable, Readable} from 'svelte/store';
// import {UnreachableError} from '@feltcoop/gro/dist/utils/error

// TODO rename this to something like `RectSelection`?

export interface Image_HandlesStore {
	subscribe: Writable<Image_HandlesState>['subscribe'];
	move: (movements: Image_HandleMovement[]) => void;
}

export type ImageXHandleName = 'x1' | 'x2';
export type ImageYHandleName = 'y1' | 'y2';
export type Image_HandleName = ImageXHandleName | ImageYHandleName;

// These dimensions are scaled to rendered screen coordinates.
export interface Image_HandlesState {
	width: number;
	height: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
	// TODO xMidpoint: number;
}

export type Image_HandleMovement = [Image_HandleName, number]; // number is a delta

// TODO refactor..? how? seems kinda hacky with the derived store usage
export const createImage_HandlesStore = <
	TDimensions extends Readable<{width: number; height: number}>,
>(
	dimensions: TDimensions,
): Image_HandlesStore => {
	// TODO this is a hack - the store should be derived from movements, right?
	let setHandles: (handles: Image_HandlesState) => void;
	let maxWidth: number;
	let maxHeight: number;
	let currentHandles: Image_HandlesState;
	const {subscribe} = derived<TDimensions, Image_HandlesState>(
		dimensions,
		($dimensions, set) => {
			setHandles = set; // TODO hack - see above
			maxWidth = $dimensions.width;
			maxHeight = $dimensions.height;
			currentHandles = {
				width: $dimensions.width,
				height: $dimensions.height,
				x1: 0,
				x2: $dimensions.width,
				y1: 0,
				y2: $dimensions.height,
			};
			set(currentHandles);
		},
		undefined, // TODO can't infer the correct overload without giving this default value - why is this not needed elsewhere?
	);

	return {
		subscribe,
		move: (movements) => {
			const nextHandles = {...currentHandles};
			for (const [handle, delta] of movements) {
				switch (handle) {
					case 'x1':
						nextHandles.x1 = Math.min(Math.max(nextHandles.x1 + delta, 0), nextHandles.x2);
						break;
					case 'x2':
						nextHandles.x2 = Math.max(Math.min(nextHandles.x2 + delta, maxWidth), nextHandles.x1);
						break;
					case 'y1':
						nextHandles.y1 = Math.min(Math.max(nextHandles.y1 + delta, 0), nextHandles.y2);
						break;
					case 'y2':
						nextHandles.y2 = Math.max(Math.min(nextHandles.y2 + delta, maxHeight), nextHandles.y1);
						break;
					// default:
					// 	throw new UnreachableError(handle);
				}
			}
			nextHandles.width = nextHandles.x2 - nextHandles.x1;
			nextHandles.height = nextHandles.y2 - nextHandles.y1;
			currentHandles = nextHandles;
			setHandles(nextHandles);
		},
	};
};
