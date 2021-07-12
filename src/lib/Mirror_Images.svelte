<script lang="ts">
	import type {Image_Info} from './images_store';
	import Mirror_Image from './Mirror_Image.svelte';

	// TODO think more about which components should be responsible for positioning

	export let image: Image_Info;
	export let container_width: number;
	export let selection_x: number;
	export let selection_y: number;
	export let selection_width: number;
	export let selection_height: number;
	export let rendered_width: number;
	export let rendered_height: number; // TODO isn't being used
	export let scale: number;

	$: style = (() => {
		// TODO this is sometimes 1px but shouldn't be - fix upstream? replicate by resizing the width til a horizontal scrollbar appears
		const x = Math.floor(container_width / 2 - rendered_width);
		return `left: ${x}px; transform: scale3d(${scale}, ${scale}, 1); width: ${
			selection_width * 2
		}px; height: ${selection_height}px;`;
	})();
</script>

<div class="mirror-images" {style}>
	<Mirror_Image
		{image}
		{selection_x}
		{selection_y}
		{selection_width}
		{selection_height}
		is_left={true}
	/>
	<Mirror_Image
		{image}
		{selection_x}
		{selection_y}
		{selection_width}
		{selection_height}
		is_left={false}
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
