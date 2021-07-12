import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

export interface Image_Info {
	name: string;
	url: string;
	el: HTMLImageElement | null;
	width: number | null;
	height: number | null;
}

export interface Images_Store {
	subscribe: Writable<Image_Info[]>['subscribe'];
	update_one: (name: string, partial: Partial<Omit<Image_Info, 'name'>>) => void;
	find_by_name: (name: string) => Image_Info | undefined;
	load: (name: string) => Image_Info;
}

export const create_images_store = (initial_value: Image_Info[]): Images_Store => {
	const {subscribe, update} = writable(initial_value);

	let current_value: Image_Info[];
	subscribe((v) => {
		current_value = v;
	});

	const find_by_name: Images_Store['find_by_name'] = (name) =>
		current_value.find((i) => i.name === name);

	const update_one: Images_Store['update_one'] = (name, partial) => {
		update((images) =>
			images.map((i) => {
				if (i.name === name) {
					return {...i, ...partial};
				} else {
					return i;
				}
			}),
		);
	};

	return {
		subscribe,
		update_one,
		find_by_name,
		load: (name: string): Image_Info => {
			const image = find_by_name(name);
			if (!image) throw Error(`Cannot find image with name ${name}`);
			if (image.el) return image; // already loading or loaded - TODO state machine could tighten things up
			const image_el = typeof window === 'undefined' ? ({} as any) : new Image(); // TODO how?
			update_one(name, {
				el: image_el,
			});
			image_el.src = image.url;
			image_el.onload = () => {
				update_one(name, {
					width: image_el.width,
					height: image_el.height,
				});
			};
			return image;
		},
	};
};
