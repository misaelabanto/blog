<template>
	<section>
		<SkillItem v-for="item in items" :key="item.id" :skill="item" />
	</section>
</template>

<script setup lang="ts">
import type { SkillItem } from '~/interfaces/ResumeSkills';
defineProps<{ items: SkillItem[] }>();
</script>
