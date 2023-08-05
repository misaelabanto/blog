import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			cdn: 'https://esm.sh/',
		}),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Roboto',
				serif: 'Comfortaa',
				mono: ['Fira Code', 'Fira Mono:400,700'],
			},
		}),
	],
});
