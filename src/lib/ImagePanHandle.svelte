<script lang="ts">
	import type {ImageHandlesState} from './imageHandlesStore';

	export let handles: ImageHandlesState;
	export let startPanning: (e: MouseEvent) => void;
	export let hover: () => void;
	export let unhover: () => void;

	$: style = calcStyle(handles);

	const calcStyle = (handles: ImageHandlesState): string => {
		const width = handles.x2 - handles.x1;
		const height = handles.y2 - handles.y1;
		const x = handles.x1;
		const y = handles.y1;
		return `width: ${width}px; height: ${height}px; transform: translate3d(${x}px, ${y}px, 0);`;
	};
</script>

<div
	class="pan-handle"
	{style}
	on:mousedown={(e) => startPanning(e)}
	on:mouseenter={() => hover()}
	on:mouseleave={() => unhover()}
/>

<style>
	.pan-handle {
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
