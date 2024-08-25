<template>
	<article
		class="w-full p-4 hover:shadow-lg hover:cursor-pointer rounded-2xl select-none"
		@click="$router.push(`${entry._path}`)"
	>
		<img :src="entry.image" :alt="entry.title" class="w-full" />
		<h2 class="text-xl font-serif text-blue-500 my-4">{{ entry.title }}</h2>
		<p class="line-clamp-5">{{ entry.description }}</p>
	</article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
defineProps<{ entry: ParsedContent }>();
</script>
