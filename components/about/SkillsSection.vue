<template>
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		<AboutSkillItem v-for="item in items" :key="item.id" :skill="item" />
	</section>
</template>

<script setup lang="ts">
import type { SkillItem } from '~/interfaces/ResumeSkills';
defineProps<{ items: SkillItem[] }>();
</script>
