import type {Image_Info} from './images_store';

export const CUSTOM_IMAGE_NAME = 'custom image url';

const create_image = (name: string, url: string) => ({
	name,
	url,
	el: null,
	width: null,
	height: null,
});

// TODO causes errors on the server, is hacked to fix
export const default_images: Image_Info[] = [
	create_image('Ada Lovelace', 'images/ada_lovelace.png'),
	create_image('Alan Turing', 'images/alan_turing.jpg'),
	create_image('Frida Kahlo', 'images/frida_kahlo.jpg'),
	create_image(CUSTOM_IMAGE_NAME, ''),
];
