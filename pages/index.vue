<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

const LIMIT = 10;
const limit = ref(LIMIT);
const { data: entries, refresh } = await useAsyncData('page-data', () =>
	queryContent({
		limit: limit.value,
		where: [
			{
				post: true,
			},
		],
	}).find()
);
const showMore = ref();
const showMoreText = ref('');
useIntersectionObserver(showMore, async () => {
	limit.value += LIMIT;
	showMoreText.value = 'Cargando...';
	await refresh();
	showMoreText.value = '';
});
</script>

<template>
	<div class="p-6 md:p-12">
		<h1 class="text-3xl text-blue font-serif mt-4 mb-2 text-center">
			Últimas publicaciones
		</h1>
		<BlogEntry v-for="entry in entries" :entry="entry" :key="entry._id" />
		<div ref="showMore" class="text-center">{{ showMoreText }}</div>
	</div>
</template>
