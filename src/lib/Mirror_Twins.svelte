<script lang="ts">
	import {derived} from 'svelte/store';
	// import {randomItem} from '@feltcoop/gro/dist/utils/random';

	import Mirror_Twin_Images from './Mirror_Twin_Images.svelte';
	import {createMirror_TwinsLayoutStore} from './mirror_twins_layout_store';
	import {createImage_HandlesStore} from './image_handles_store';
	import {createSource_ImageLayoutStore} from './source_image_layout_store';
	import {createSource_ImageSelectionStore} from './source_image_selection_store';
	import {createMirror_ImagesLayoutStore} from './mirror_images_layout_store';
	import type {ImagesStore} from './images_store';
	import {CUSTOM_IMAGE_NAME} from './default_images';

	/*

  There are 3 primary data sources:

  1 - the container width/height (window in this case)
  2 - the images, mainly the width/height
  3 - the UI state for cropping, rotating, locating the midpoint, etc

  */

	export let width: number;
	export let height: number;
	export let images: ImagesStore;

	const controlsHeight = 130;
	$: contentHeight = height - controlsHeight;

	// We're storing the selected image by name instead of just the object
	// because we use immutable objects for the images,
	// and the `<select>` element breaks because those values get changed
	// when data is loaded, which creates new image object references.
	// This wasn't a problem when we were using stores per image object,
	// because we could bind the select to the store itself,
	// but passing stores down as props fails due to this bug:
	// https://github.com/sveltejs/svelte/issues/3662
	let selectedImageName = $images[2].name;
	$: image = $images && images.findByName(selectedImageName);
	$: images.load(selectedImageName);
	$: imageLoaded = !!(image && image.width !== null);

	const layout = createMirror_TwinsLayoutStore();
	$: imageLoaded && layout.compute(image!, width, contentHeight);
	$: layoutState = $layout;

	const sourceImageLayout = createSource_ImageLayoutStore(layout);
	$: sourceImageLayoutState = $sourceImageLayout;
	const sourceImageDimensions = derived(sourceImageLayout, ($sourceImageLayout) => ({
		width: ($sourceImageLayout && $sourceImageLayout.width) || 0,
		height: ($sourceImageLayout && $sourceImageLayout.height) || 0,
	}));
	// TODO store handles data for each image
	const handles = createImage_HandlesStore(sourceImageDimensions);
	const sourceImageSelection = createSource_ImageSelectionStore(sourceImageLayout, handles);
	$: sourceImageSelectionState = $sourceImageSelection;
	const mirrorImagesLayout = createMirror_ImagesLayoutStore(
		layout,
		sourceImageLayout,
		sourceImageSelection,
	);
	$: mirrorImagesLayoutState = $mirrorImagesLayout;
</script>

<div class="mirror-twins" style="height: {height}px; width: {width}px;">
	<!-- TODO maybe put these in togglable overlay? or always show? -->
	<div class="controls" style="height: {controlsHeight}px;">
		<form>
			{#each $images as image (image.name)}
				<label class="control" class:selected={image.name === selectedImageName}
					><input
						type="radio"
						bind:group={selectedImageName}
						value={image.name}
					/>{#if image.name === CUSTOM_IMAGE_NAME}<input
							class="url"
							type="text"
							on:input={(e) => images.updateOne(image.name, {url: e.currentTarget.value})}
							placeholder={image.name}
							on:focus={() => {
								// TODO does it matter if we do this check?
								if (selectedImageName !== CUSTOM_IMAGE_NAME) selectedImageName = CUSTOM_IMAGE_NAME;
							}}
						/>{:else}{image.name}{/if}</label
				>
			{/each}
		</form>
	</div>
	{#if layoutState && image && sourceImageLayoutState && sourceImageSelectionState && mirrorImagesLayoutState}
		<Mirror_Twin_Images
			{image}
			height={contentHeight}
			layout={layoutState}
			handles={$handles}
			sourceImageLayout={sourceImageLayoutState}
			sourceImageSelection={sourceImageSelectionState}
			mirrorImagesLayout={mirrorImagesLayoutState}
			moveHandles={handles.move}
		/>
	{/if}
	<!-- TODO should we pass the handles store down instead? -->
</div>

<style>
	.mirror-twins {
		/* TODO ? remove this? */
		position: absolute;
		left: 0;
		top: 0;
	}

	.controls {
		z-index: 1; /* layer the controls above the source image */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.controls form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	.control {
		opacity: 0.6;
	}
	.control:hover {
		opacity: 0.8;
	}
	.control:active {
		opacity: 0.9;
	}
	.control.selected {
		opacity: 1;
	}
	.url {
		width: 150px;
	}
</style>
