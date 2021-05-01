<script lang="ts">
	import ImageHandles from './ImageHandles.svelte';
	import type {ImageHandleMovement, ImageHandlesState} from './imageHandlesStore';
	import type {ImageInfo} from './imagesStore';

	export let image: ImageInfo;
	export let width: number;
	export let height: number;
	export let scale: number;
	export let left: number;
	export let top: number;

	// TODO probably refactor this, renaming the component and making `SourceImage` just the image

	// TODO it seems this information should live in `ImageHandles`,
	// but we need it to calculate `bgRects`
	// .. so should the handles component expose its own data to this parent? or should it remain "controlled"
	export let handles: ImageHandlesState;
	export let moveHandles: (movements: ImageHandleMovement[]) => void;

	// Emphasize the cropped area by partially obscuring the excluded image area.
	// It's probably better to do this with svg, but 4 divs is fine.
	$: bgRects = [
		{
			left: 0,
			top: 0,
			width: handles.x1,
			height,
		},
		{
			left: handles.x2,
			top: 0,
			width: width - handles.x2,
			height,
		},
		{
			left: handles.x1,
			top: 0,
			width: handles.x2 - handles.x1,
			height: handles.y1,
		},
		{
			left: handles.x1,
			top: handles.y2,
			width: handles.x2 - handles.x1,
			height: height - handles.y2,
		},
	];
</script>

<div
	class="source-image"
	style="width: {width}px; height: {height}px; left: {left}px; top: {top}px;"
>
	<div
		class="image"
		style="width: {image.width}px; height: {image.height}px; background-image:
		url({image.url}); transform: scale3d({scale}, {scale}, 1);"
	/>
	{#each bgRects as bgRect}
		<div
			class="bg-rect"
			style="left: {bgRect.left}px; top: {bgRect.top}px; width: {bgRect.width}px;
			height: {bgRect.height}px;"
		/>
	{/each}
	<ImageHandles {handles} {moveHandles} containerWidth={width} containerHeight={height} />
</div>

<style>
	.source-image {
		position: absolute;
	}
	.image {
		transform-origin: left top;
	}
	.bg-rect {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
