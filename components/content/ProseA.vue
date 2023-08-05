<template>
	<NuxtLink
		class="text-blue-500 decoration-none hover:decoration-solid"
		:href="href"
		:target="target"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: '',
	},
	target: {
		type: String,
		default: undefined,
		required: false,
	},
});
</script>
