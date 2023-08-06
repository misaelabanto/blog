<template>
	<div>
		<h1 class="text-2xl">{{ skill.name }}</h1>
		<p>{{ skill.level }}</p>
		<SkillMetric :num="skill.levelNum" />
	</div>
</template>

<script setup lang="ts">
import type { SkillItem } from '../../interfaces/ResumeSkills';

defineProps<{ skill: SkillItem }>();
</script>
