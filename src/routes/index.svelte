<script lang="ts">
	import MirrorTwins from '$lib/MirrorTwins.svelte';
	import {createImagesStore} from '$lib/imagesStore';
	import {defaultImages} from '$lib/defaultImages';

	export let name = 'mirror twins';

	const images = createImagesStore(defaultImages);

	// TODO do this better
	let width = typeof window === 'undefined' ? 0 : window.innerWidth;
	let height = typeof window === 'undefined' ? 0 : window.innerHeight;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<MirrorTwins {images} {width} {height} />
<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
