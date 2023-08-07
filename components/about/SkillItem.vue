<template>
	<div class="py-4">
		<h1 class="text-2xl">{{ skill.name }}</h1>
		<p>{{ skill.level }}</p>
		<AboutSkillMetric :num="skill.levelNum" />
	</div>
</template>

<script setup lang="ts">
import type { SkillItem } from '../../interfaces/ResumeSkills';

defineProps<{ skill: SkillItem }>();
</script>
