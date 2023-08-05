<script setup lang="ts">
import type { Skill } from '~/interfaces/Skill';
const {
	data: { value: skillsResponse },
} = await useAsyncData('skills-data', () =>
	queryContent<{ body: Skill[] }>('skills').findOne()
);
const skills = skillsResponse?.body;
</script>

<template>
	<div>
		<ul>
			<li v-for="skill in skills" :key="skill.name">
				{{ skill.name }}: {{ skill.level }}
			</li>
		</ul>
	</div>
</template>
