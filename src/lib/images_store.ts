import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

export interface ImageInfo {
	name: string;
	url: string;
	el: HTMLImageElement | null;
	width: number | null;
	height: number | null;
}

export interface ImagesStore {
	subscribe: Writable<ImageInfo[]>['subscribe'];
	updateOne: (name: string, partial: Partial<Omit<ImageInfo, 'name'>>) => void;
	findByName: (name: string) => ImageInfo | undefined;
	load: (name: string) => ImageInfo;
}

export const createImagesStore = (initialValue: ImageInfo[]): ImagesStore => {
	const {subscribe, update} = writable(initialValue);

	let currentValue: ImageInfo[];
	subscribe((v) => {
		currentValue = v;
	});

	const findByName: ImagesStore['findByName'] = (name) => currentValue.find((i) => i.name === name);

	const updateOne: ImagesStore['updateOne'] = (name, partial) => {
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
		updateOne,
		findByName,
		load: (name: string): ImageInfo => {
			const image = findByName(name);
			if (!image) throw Error(`Cannot find image with name ${name}`);
			if (image.el) return image; // already loading or loaded - TODO state machine could tighten things up
			const imageEl = typeof window === 'undefined' ? ({} as any) : new Image(); // TODO how?
			updateOne(name, {
				el: imageEl,
			});
			imageEl.src = image.url;
			imageEl.onload = () => {
				updateOne(name, {
					width: imageEl.width,
					height: imageEl.height,
				});
			};
			return image;
		},
	};
};
