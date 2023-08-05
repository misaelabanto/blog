<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData('page-data', () =>
	queryContent(path).findOne()
);
</script>

<template>
	<main>
		<ContentRenderer v-if="data" :value="data">
			<h1 class="text-7xl text-blue font-serif mt-4 mb-2 md:px-40">
				{{ data.title }}
			</h1>
			<hr class="w-3/4 border border-gray border-1 mt-4 mb-2 md:mx-auto" />
			<article class="sm:w-5/6 md:w-1/2 mx-auto">
				<ContentRendererMarkdown :value="data" />
			</article>
		</ContentRenderer>
	</main>
</template>
