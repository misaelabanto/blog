<template>
	<div class="flex flex-col gap-1">
		<h1 class="text-3xl font-mono font-bold">{{ name }}</h1>
		<p class="text-blue text-sm">
			{{ headline }}
		</p>
		<p>
			{{ summary }}
		</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{ name: string; headline: string; summary: string }>();
</script>
