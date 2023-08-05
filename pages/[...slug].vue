<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData('page-data', () =>
	queryContent(path).findOne()
);
</script>

<template>
	<main>
		<ContentRenderer v-if="data" :value="data">
			<h1>{{ data.title }}</h1>
			<ContentRendererMarkdown :value="data" />
		</ContentRenderer>
	</main>
</template>
