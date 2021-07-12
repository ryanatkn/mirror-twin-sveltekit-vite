<script lang="ts">
	import Source_Image from './Source_Image.svelte';
	import Mirror_Images from './Mirror_Images.svelte';
	import type {Image_Info} from './images_store';
	import type {Image_Handle_Movement, Image_Handles_State} from './image_handles_store';
	import type {Mirror_Twins_Layout} from './mirror_twins_layout_store';
	import type {Source_Image_Layout} from './source_image_layout_store';
	import type {Source_Image_Selection} from './source_image_selection_store';
	import type {Mirror_Images_Layout} from './mirror_images_layout_store';

	export let height: number;
	export let layout: Mirror_Twins_Layout; // TODO what are the tradeoffs of making this a store?
	export let source_image_layout: Source_Image_Layout;
	export let source_image_selection: Source_Image_Selection;
	export let mirror_images_layout: Mirror_Images_Layout;

	export let image: Image_Info;
	export let handles: Image_Handles_State;
	export let move_handles: (movements: Image_Handle_Movement[]) => void;
</script>

<div class="mirror-twin-images" style="height: {height}px;">
	<div class="source-image-wrapper" style="height: {layout.source_container_height}px">
		<Source_Image
			{image}
			{handles}
			{move_handles}
			width={source_image_layout.width}
			height={source_image_layout.height}
			scale={source_image_layout.scale}
			left={source_image_layout.x1}
			top={source_image_layout.y1}
		/>
	</div>
	<div class="mirror-images-wrapper" style="height: {layout.mirror_container_height}px">
		<Mirror_Images
			{image}
			container_width={layout.mirror_container_width}
			selection_x={source_image_selection.x1}
			selection_y={source_image_selection.y1}
			selection_width={source_image_selection.width}
			selection_height={source_image_selection.height}
			rendered_width={mirror_images_layout.image_width}
			rendered_height={mirror_images_layout.image_height}
			scale={mirror_images_layout.scale}
		/>
	</div>
</div>

<style>
	.mirror-twin-images {
		width: 100%;
		user-select: none;
		-webkit-user-select: none;
		/* TODO is this what we want? */
		overflow: hidden;
	}
	.source-image-wrapper {
		position: relative;
		z-index: 1; /* layer above the mirror images so the handles are always visible  */
	}
	.mirror-images-wrapper {
		position: relative;
	}
</style>
