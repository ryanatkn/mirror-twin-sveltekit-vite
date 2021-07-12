import {derived} from 'svelte/store';
import type {Writable, Readable} from 'svelte/store';
import {Unreachable_Error} from '@feltcoop/felt/util/error.js';

// TODO rename this to something like `Rect_Selection`?

export interface Image_Handles_Store {
	subscribe: Writable<Image_Handles_State>['subscribe'];
	move: (movements: Image_Handle_Movement[]) => void;
}

export type Image_X_Handle_Name = 'x1' | 'x2';
export type Image_Y_Handle_Name = 'y1' | 'y2';
export type Image_Handle_Name = Image_X_Handle_Name | Image_Y_Handle_Name;

// These dimensions are scaled to rendered screen coordinates.
export interface Image_Handles_State {
	width: number;
	height: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
	// TODO xMidpoint: number;
}

export type Image_Handle_Movement = [Image_Handle_Name, number]; // number is a delta

// TODO refactor..? how? seems kinda hacky with the derived store usage
export const create_image_handles_store = <
	T_Dimensions extends Readable<{width: number; height: number}>,
>(
	dimensions: T_Dimensions,
): Image_Handles_Store => {
	// TODO this is a hack - the store should be derived from movements, right?
	let set_handles: (handles: Image_Handles_State) => void;
	let max_width: number;
	let max_height: number;
	let current_handles: Image_Handles_State;
	const {subscribe} = derived<T_Dimensions, Image_Handles_State>(
		dimensions,
		($dimensions, set) => {
			set_handles = set; // TODO hack - see above
			max_width = $dimensions.width;
			max_height = $dimensions.height;
			current_handles = {
				width: $dimensions.width,
				height: $dimensions.height,
				x1: 0,
				x2: $dimensions.width,
				y1: 0,
				y2: $dimensions.height,
			};
			set(current_handles);
		},
		undefined, // TODO can't infer the correct overload without giving this default value - why is this not needed elsewhere?
	);

	return {
		subscribe,
		move: (movements) => {
			const next_handles = {...current_handles};
			for (const [handle, delta] of movements) {
				switch (handle) {
					case 'x1':
						next_handles.x1 = Math.min(Math.max(next_handles.x1 + delta, 0), next_handles.x2);
						break;
					case 'x2':
						next_handles.x2 = Math.max(
							Math.min(next_handles.x2 + delta, max_width),
							next_handles.x1,
						);
						break;
					case 'y1':
						next_handles.y1 = Math.min(Math.max(next_handles.y1 + delta, 0), next_handles.y2);
						break;
					case 'y2':
						next_handles.y2 = Math.max(
							Math.min(next_handles.y2 + delta, max_height),
							next_handles.y1,
						);
						break;
					default:
						throw new Unreachable_Error(handle);
				}
			}
			next_handles.width = next_handles.x2 - next_handles.x1;
			next_handles.height = next_handles.y2 - next_handles.y1;
			current_handles = next_handles;
			set_handles(next_handles);
		},
	};
};
