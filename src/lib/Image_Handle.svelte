<script lang="ts">
	import type {
		Image_Handles_State,
		Image_X_Handle_Name,
		Image_Y_Handle_Name,
	} from './image_handles_store';

	export let x_handle: Image_X_Handle_Name;
	export let y_handle: Image_Y_Handle_Name;
	export let handles: Image_Handles_State;
	export let start_dragging: (e: any, x_handle: any, y_handle: any) => void; // TODO types
	export let hovering: boolean;
	export let dragging: boolean;
	export let size: number;

	$: x = handles[x_handle] - size / 2;
	$: y = handles[y_handle] - size / 2;

	const on_mousedown = (e: MouseEvent) => {
		start_dragging(e, x_handle, y_handle);
	};
</script>

<div
	class="handle"
	class:hovering
	class:dragging
	style="transform: translate3d({x}px, {y}px, 0); width: {size}px; height: {size}px;"
	on:mousedown={on_mousedown}
/>

<style>
	.handle {
		position: absolute;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.3);
		box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
	}
	.handle:hover,
	.hovering {
		border-color: rgba(255, 255, 255, 0.7);
	}
	.dragging {
		box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4) inset;
		border-color: rgba(255, 255, 255, 1);
		background-color: rgba(255, 255, 255, 0.3);
	}
</style>
