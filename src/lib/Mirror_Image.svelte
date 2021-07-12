<script lang="ts">
	import type {Image_Info} from './images_store';

	// TODO think more about which components should be responsible for positioning

	// TODO how can we fix the 1px black seams in Chrome?
	// Drawing the full image behind the transformed version does NOT fix it,
	// because the black seam is actually part of the rendered image, not transparent.
	// Maybe we should draw a 2px slice at the midpoint?
	// Or play with the scaling factor and rounding, to see if that fixes it?

	export let image: Image_Info;
	export let selection_x: number;
	export let selection_y: number;
	export let selection_width: number;
	export let selection_height: number;
	export let is_left: boolean;

	$: wrapper_style = `width: ${selection_width}px; height: ${selection_height}px;`;
	$: left_half_style = calc_image_style(
		true,
		is_left,
		image,
		selection_x,
		selection_y,
		selection_width,
		selection_height,
	);
	$: right_half_style = calc_image_style(
		false,
		is_left,
		image,
		selection_x,
		selection_y,
		selection_width,
		selection_height,
	);

	const calc_image_style = (
		is_left_half: boolean,
		is_left: boolean,
		image: Image_Info,
		selection_x: number,
		selection_y: number,
		selection_width: number,
		selection_height: number,
	) => {
		let transform;
		let bg_position;
		if (is_left_half) {
			transform = is_left ? '' : 'transform: rotate3d(0, 1, 0, 180deg);';
			bg_position = is_left
				? `background-position: ${image.width! - selection_x}px ${-selection_y}px;`
				: `background-position: ${
						image.width! - selection_x - selection_width / 2
				  }px ${-selection_y}px;`;
		} else {
			transform = is_left ? 'transform: rotate3d(0, 1, 0, 180deg);' : '';
			bg_position = is_left
				? `background-position: ${image.width! - selection_x}px ${-selection_y}px;`
				: `background-position: ${
						image.width! - selection_x - selection_width / 2
				  }px ${-selection_y}px;`;
		}
		return `width: ${selection_width / 2}px; height: ${selection_height}px; background-image: url(${
			image.url
		}); ${bg_position} ${transform}`;
	};
</script>

<div class="mirror-image" style={wrapper_style}>
	<div style={left_half_style} />
	<div style={right_half_style} />
</div>

<style>
	.mirror-image {
		/* TODO maybe translate instead of using this layout - might fix the 1px seams in Chrome? */
		display: flex;
	}
</style>
