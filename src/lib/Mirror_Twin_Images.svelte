<script lang="ts">
	import Source_Image from './Source_Image.svelte';
	import Mirror_Images from './Mirror_Images.svelte';
	import type {ImageInfo} from './images_store';
	import type {Image_HandleMovement, Image_HandlesState} from './image_handles_store';
	import type {Mirror_TwinsLayout} from './mirror_twins_layout_store';
	import type {Source_ImageLayout} from './source_image_layout_store';
	import type {Source_ImageSelection} from './source_image_selection_store';
	import type {Mirror_ImagesLayout} from './mirror_images_layout_store';

	export let height: number;
	export let layout: Mirror_TwinsLayout; // TODO what are the tradeoffs of making this a store?
	export let sourceImageLayout: Source_ImageLayout;
	export let sourceImageSelection: Source_ImageSelection;
	export let mirrorImagesLayout: Mirror_ImagesLayout;

	export let image: ImageInfo;
	export let handles: Image_HandlesState;
	export let moveHandles: (movements: Image_HandleMovement[]) => void;
</script>

<div class="mirror-twin-images" style="height: {height}px;">
	<div class="source-image-wrapper" style="height: {layout.sourceContainerHeight}px">
		<Source_Image
			{image}
			{handles}
			{moveHandles}
			width={sourceImageLayout.width}
			height={sourceImageLayout.height}
			scale={sourceImageLayout.scale}
			left={sourceImageLayout.x1}
			top={sourceImageLayout.y1}
		/>
	</div>
	<div class="mirror-images-wrapper" style="height: {layout.mirrorContainerHeight}px">
		<Mirror_Images
			{image}
			containerWidth={layout.mirrorContainerWidth}
			selectionX={sourceImageSelection.x1}
			selectionY={sourceImageSelection.y1}
			selectionWidth={sourceImageSelection.width}
			selectionHeight={sourceImageSelection.height}
			renderedWidth={mirrorImagesLayout.imageWidth}
			renderedHeight={mirrorImagesLayout.imageHeight}
			scale={mirrorImagesLayout.scale}
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
