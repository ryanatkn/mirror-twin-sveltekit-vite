<script lang="ts">
	import {derived} from 'svelte/store';
	// import {randomItem} from '@feltcoop/gro/dist/utils/random';

	import Mirror_Twin_Images from './Mirror_Twin_Images.svelte';
	import {create_mirror_twins_layout_store} from './mirror_twins_layout_store';
	import {create_image_handles_store} from './image_handles_store';
	import {create_source_image_layout_store} from './source_image_layout_store';
	import {create_source_image_selection_store} from './source_image_selection_store';
	import {create_mirror_images_layout_store} from './mirror_images_layout_store';
	import type {Images_Store} from './images_store';
	import {CUSTOM_IMAGE_NAME} from './default_images';

	/*

  There are 3 primary data sources:

  1 - the container width/height (window in this case)
  2 - the images, mainly the width/height
  3 - the UI state for cropping, rotating, locating the midpoint, etc

  */

	export let width: number;
	export let height: number;
	export let images: Images_Store;

	const controls_height = 130;
	$: content_height = height - controls_height;

	// We're storing the selected image by name instead of just the object
	// because we use immutable objects for the images,
	// and the `<select>` element breaks because those values get changed
	// when data is loaded, which creates new image object references.
	// This wasn't a problem when we were using stores per image object,
	// because we could bind the select to the store itself,
	// but passing stores down as props fails due to this bug:
	// https://github.com/sveltejs/svelte/issues/3662
	let selected_image_name = $images[2].name;
	$: image = $images && images.find_by_name(selected_image_name);
	$: images.load(selected_image_name);
	$: image_loaded = !!(image && image.width !== null);

	const layout = create_mirror_twins_layout_store();
	$: image_loaded && layout.compute(image!, width, content_height);
	$: layout_state = $layout;

	const source_image_layout = create_source_image_layout_store(layout);
	$: source_image_layout_state = $source_image_layout;
	const source_image_dimensions = derived(source_image_layout, ($source_image_layout) => ({
		width: ($source_image_layout && $source_image_layout.width) || 0,
		height: ($source_image_layout && $source_image_layout.height) || 0,
	}));
	// TODO store handles data for each image
	const handles = create_image_handles_store(source_image_dimensions);
	const source_image_selection = create_source_image_selection_store(source_image_layout, handles);
	$: source_image_selectionState = $source_image_selection;
	const mirror_images_layout = create_mirror_images_layout_store(
		layout,
		source_image_layout,
		source_image_selection,
	);
	$: mirror_images_layout_state = $mirror_images_layout;
</script>

<div class="mirror-twins" style="height: {height}px; width: {width}px;">
	<!-- TODO maybe put these in togglable overlay? or always show? -->
	<div class="controls" style="height: {controls_height}px;">
		<form>
			{#each $images as image (image.name)}
				<label class="control" class:selected={image.name === selected_image_name}
					><input
						type="radio"
						bind:group={selected_image_name}
						value={image.name}
					/>{#if image.name === CUSTOM_IMAGE_NAME}<input
							class="url"
							type="text"
							on:input={(e) => images.update_one(image.name, {url: e.currentTarget.value})}
							placeholder={image.name}
							on:focus={() => {
								// TODO does it matter if we do this check?
								if (selected_image_name !== CUSTOM_IMAGE_NAME)
									selected_image_name = CUSTOM_IMAGE_NAME;
							}}
						/>{:else}{image.name}{/if}</label
				>
			{/each}
		</form>
	</div>
	{#if layout_state && image && source_image_layout_state && source_image_selectionState && mirror_images_layout_state}
		<Mirror_Twin_Images
			{image}
			height={content_height}
			layout={layout_state}
			handles={$handles}
			source_image_layout={source_image_layout_state}
			source_image_selection={source_image_selectionState}
			mirror_images_layout={mirror_images_layout_state}
			move_handles={handles.move}
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
