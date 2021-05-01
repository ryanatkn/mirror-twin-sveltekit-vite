import type {ImageInfo} from './imagesStore';

export const CUSTOM_IMAGE_NAME = 'custom image url';

const createImage = (name: string, url: string) => ({
	name,
	url,
	el: null,
	width: null,
	height: null,
});

// TODO causes errors on the server, is hacked to fix
export const defaultImages: ImageInfo[] = [
	createImage('Ada Lovelace', 'images/ada_lovelace.png'),
	createImage('Alan Turing', 'images/alan_turing.jpg'),
	createImage('Frida Kahlo', 'images/frida_kahlo.jpg'),
	createImage(CUSTOM_IMAGE_NAME, ''),
];
