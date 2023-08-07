<template>
	<main v-if="resume" class="p-4">
		<AboutProfileLeading
			:name="resume.basics.name"
			:headline="resume.basics.headline"
			:summary="resume.basics.summary"
		/>
		<AboutProfileSection :items="resume.basics.profiles" />
		<AboutSkillsSection :items="resume.sections.skills.items" />
	</main>
</template>

<script setup lang="ts">
import type { Resume } from '~/interfaces/Resume';
const { data: resumeResponse } = await useAsyncData('resume-english', () =>
	queryContent<Resume>('resume-english').findOne()
);
const resume = resumeResponse;
</script>
