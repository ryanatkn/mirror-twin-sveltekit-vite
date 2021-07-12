<script lang="ts">
	import type {Image_HandlesState, ImageXHandleName, ImageYHandleName} from './image_handles_store';

	export let xHandle: ImageXHandleName;
	export let yHandle: ImageYHandleName;
	export let handles: Image_HandlesState;
	export let startDragging: (e: any, xHandle: any, yHandle: any) => void; // TODO types
	export let hovering: boolean;
	export let dragging: boolean;
	export let size: number;

	$: x = handles[xHandle] - size / 2;
	$: y = handles[yHandle] - size / 2;

	const onMouseDown = (e: MouseEvent) => {
		startDragging(e, xHandle, yHandle);
	};
</script>

<div
	class="handle"
	class:hovering
	class:dragging
	style="transform: translate3d({x}px, {y}px, 0); width: {size}px; height: {size}px;"
	on:mousedown={onMouseDown}
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
