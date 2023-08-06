<template>
	<div>
		<div v-for="i in [1, 2, 3, 4, 5]" class="flex gap-1">
			<div
				class="text-blue text-3xl"
				:class="{
					'i-mdi-circle': num / 2 <= i,
					'i-mdi-circle-outline': num / 2 > i,
				}"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ num: number }>();
</script>
