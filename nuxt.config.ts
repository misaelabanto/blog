// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@unocss/nuxt'],
	app: {
		head: {
			title: 'Misael Blog',
		},
	},
	components: [
		{
			path: '~/components',
			global: true,
		},
	],
});
