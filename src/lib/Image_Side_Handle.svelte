<script lang="ts">
	import type {Image_HandleName, Image_HandlesState} from './image_handles_store';

	export let handle: Image_HandleName;
	export let handles: Image_HandlesState;
	export let size: number;
	export let containerWidth: number;
	export let containerHeight: number;
	export let startDragging: (e: MouseEvent, handle: Image_HandleName) => void;
	export let hover: (sideHandle: Image_HandleName) => void;
	export let unhover: (sideHandle: Image_HandleName) => void;

	$: style = calcStyle(handle, handles, size);

	// TODO these are recalculated every update because of `handles`,
	// but 1/4 of that work is usually wasted.
	// It's not a perf problem, but I'm curious how it can be cleanly avoided.
	const calcStyle = (handle: Image_HandleName, handles: Image_HandlesState, size: number): string => {
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
	on:mousedown={(e) => startDragging(e, handle)}
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
