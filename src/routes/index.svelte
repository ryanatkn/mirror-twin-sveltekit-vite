<script lang="ts">
	import Mirror_Twins from '$lib/Mirror_Twins.svelte';
	import {createImagesStore} from '$lib/images_store';
	import {default_images} from '$lib/default_images';
	import {browser} from '$app/env';

	export let name = 'mirror-twin-sveltekit-vite';

	const images = createImagesStore(default_images);

	// TODO do this better
	let width = typeof window === 'undefined' ? 0 : window.innerWidth;
	let height = typeof window === 'undefined' ? 0 : window.innerHeight;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<!-- TODO this browser check is a hack to make the build work,
	SvelteKit/Vite is buggy and produces two <Mirror_Twins/> on the page  -->
{#if browser}
	<Mirror_Twins {images} {width} {height} />
{/if}
<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
