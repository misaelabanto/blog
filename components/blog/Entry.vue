<template>
	<article class="hover:shadow-lg p-4 rounded-2xl select-none w-full md:w-1/3">
		<img :src="entry.image" :alt="entry.title" class="w-full" />
		<h2 class="text-xl font-serif text-blue-500 my-4">{{ entry.title }}</h2>
		<p class="h-40">{{ entry.description.substring(0, 300) }} [...]</p>
	</article>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
defineProps<{ entry: ParsedContent }>();
</script>
