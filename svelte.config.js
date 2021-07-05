import {typescript} from 'svelte-preprocess-esbuild';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	kit: {
		adapter: static_adapter(),
		target: '#svelte',
		files: {assets: 'src/static'},
		vite: {
			ssr: {
				noExternal: ['@feltcoop/felt'],
			},
			optimizeDeps: {
				exclude: ['@feltcoop/felt'],
			},
		},
	},
};
