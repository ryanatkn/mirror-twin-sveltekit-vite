<script lang="ts">
	import type {ImageInfo} from './imagesStore';

	// TODO think more about which components should be responsible for positioning

	// TODO how can we fix the 1px black seams in Chrome?
	// Drawing the full image behind the transformed version does NOT fix it,
	// because the black seam is actually part of the rendered image, not transparent.
	// Maybe we should draw a 2px slice at the midpoint?
	// Or play with the scaling factor and rounding, to see if that fixes it?

	export let image: ImageInfo;
	export let selectionX: number;
	export let selectionY: number;
	export let selectionWidth: number;
	export let selectionHeight: number;
	export let isLeft: boolean;

	$: wrapperStyle = `width: ${selectionWidth}px; height: ${selectionHeight}px;`;
	$: leftHalfStyle = calcImageStyle(
		true,
		isLeft,
		image,
		selectionX,
		selectionY,
		selectionWidth,
		selectionHeight,
	);
	$: rightHalfStyle = calcImageStyle(
		false,
		isLeft,
		image,
		selectionX,
		selectionY,
		selectionWidth,
		selectionHeight,
	);

	const calcImageStyle = (
		isLeftHalf: boolean,
		isLeft: boolean,
		image: ImageInfo,
		selectionX: number,
		selectionY: number,
		selectionWidth: number,
		selectionHeight: number,
	) => {
		let transform;
		let bgPosition;
		if (isLeftHalf) {
			transform = isLeft ? '' : 'transform: rotate3d(0, 1, 0, 180deg);';
			bgPosition = isLeft
				? `background-position: ${image.width! - selectionX}px ${-selectionY}px;`
				: `background-position: ${
						image.width! - selectionX - selectionWidth / 2
				  }px ${-selectionY}px;`;
		} else {
			transform = isLeft ? 'transform: rotate3d(0, 1, 0, 180deg);' : '';
			bgPosition = isLeft
				? `background-position: ${image.width! - selectionX}px ${-selectionY}px;`
				: `background-position: ${
						image.width! - selectionX - selectionWidth / 2
				  }px ${-selectionY}px;`;
		}
		return `width: ${selectionWidth / 2}px; height: ${selectionHeight}px; background-image: url(${
			image.url
		}); ${bgPosition} ${transform}`;
	};
</script>

<div class="mirror-image" style={wrapperStyle}>
	<div style={leftHalfStyle} />
	<div style={rightHalfStyle} />
</div>

<style>
	.mirror-image {
		/* TODO maybe translate instead of using this layout - might fix the 1px seams in Chrome? */
		display: flex;
	}
</style>
