<script lang="ts">
	import type {Image_Handle_Name, Image_Handles_State} from './image_handles_store';

	export let handle: Image_Handle_Name;
	export let handles: Image_Handles_State;
	export let size: number;
	export let container_width: number;
	export let container_height: number;
	export let start_dragging: (e: MouseEvent, handle: Image_Handle_Name) => void;
	export let hover: (side_handle: Image_Handle_Name) => void;
	export let unhover: (side_handle: Image_Handle_Name) => void;

	$: style = calc_style(handle, handles, size);

	// TODO these are recalculated every update because of `handles`,
	// but 1/4 of that work is usually wasted.
	// It's not a perf problem, but I'm curious how it can be cleanly avoided.
	const calc_style = (
		handle: Image_Handle_Name,
		handles: Image_Handles_State,
		size: number,
	): string => {
		let width, height, x, y;
		switch (handle) {
			case 'x1':
				width = size;
				height = handles.y2 - handles.y1;
				x = handles.x1 - size / 2;
				y = handles.y1;
				break;
			case 'x2':
				width = size;
				height = handles.y2 - handles.y1;
				x = handles.x2 - size / 2;
				y = handles.y1;
				break;
			case 'y1':
				width = handles.x2 - handles.x1;
				height = size;
				x = handles.x1;
				y = handles.y1 - size / 2;
				break;
			case 'y2':
				width = handles.x2 - handles.x1;
				height = size;
				x = handles.x1;
				y = handles.y2 - size / 2;
				break;
			default:
				throw new Error(`Unknown handle ${handle}`);
		}
		return `width: ${width}px; height: ${height}px; transform: translate3d(${x}px, ${y}px, 0);`;
	};
</script>

<div
	class="side-handle"
	{style}
	on:mousedown={(e) => start_dragging(e, handle)}
	on:mouseenter={() => hover(handle)}
	on:mouseleave={() => unhover(handle)}
/>

<style>
	.side-handle {
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
