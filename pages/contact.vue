<template>
	<div class="text-center flex flex-col items-center gap-12">
		<a
			v-for="network in socialNetworks"
			class="w-60 flex items-center hover:shadow-xl rounded-lg"
			:href="network.url"
		>
			<div
				:class="`rounded-full text-5xl ${network.color} ${network.icon}`"
			></div>
			<div class="font-serif text-3xl">{{ network.name }}</div>
		</a>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const socialNetworks = ref([
	{
		name: 'Telegram',
		url: 'https://t.me/misaelabanto',
		icon: 'i-mdi-telegram',
		color: 'text-blue-500',
	},
	{
		name: 'X',
		url: 'https://x.com/_misaelabanto',
		icon: 'i-fa6-brands:x-twitter',
		color: 'text-black',
	},
	{
		name: 'Email',
		url: 'mailto:misaelabanto@gmail.com',
		icon: 'i-mdi-email',
		color: 'text-red-500',
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/misaelabanto',
		icon: 'i-mdi-linkedin',
		color: 'text-blue-800',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/misaelabanto',
		icon: 'i-mdi-github',
		color: 'text-black',
	},
]);
</script>
