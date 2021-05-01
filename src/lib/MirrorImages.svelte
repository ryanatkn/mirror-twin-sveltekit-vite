<script lang="ts">
	import type {ImageInfo} from './imagesStore';
	import MirrorImage from './MirrorImage.svelte';

	// TODO think more about which components should be responsible for positioning

	export let image: ImageInfo;
	export let containerWidth: number;
	export let selectionX: number;
	export let selectionY: number;
	export let selectionWidth: number;
	export let selectionHeight: number;
	export let renderedWidth: number;
	export let renderedHeight: number; // TODO isn't being used
	export let scale: number;

	$: style = (() => {
		// TODO this is sometimes 1px but shouldn't be - fix upstream? replicate by resizing the width til a horizontal scrollbar appears
		const x = Math.floor(containerWidth / 2 - renderedWidth);
		return `left: ${x}px; transform: scale3d(${scale}, ${scale}, 1); width: ${
			selectionWidth * 2
		}px; height: ${selectionHeight}px;`;
	})();
</script>

<div class="mirror-images" {style}>
	<MirrorImage {image} {selectionX} {selectionY} {selectionWidth} {selectionHeight} isLeft={true} />
	<MirrorImage
		{image}
		{selectionX}
		{selectionY}
		{selectionWidth}
		{selectionHeight}
		isLeft={false}
	/>
</div>

<style>
	/* TODO maybe translate instead of using this layout - might fix the 1px seams in Chrome? */
	.mirror-images {
		position: absolute;
		top: 0;
		display: flex;
		transform-origin: top left;
	}
</style>
