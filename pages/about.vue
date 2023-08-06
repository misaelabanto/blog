<template>
	<main v-if="resume" class="p-4">
		<ProfileLeading
			:name="resume.basics.name"
			:headline="resume.basics.headline"
			:summary="resume.basics.summary"
		/>
		<AboutProfileSection :items="resume?.basics.profiles" />
	</main>
</template>

<script setup lang="ts">
import type { Resume } from '~/interfaces/Resume';
import ProfileLeading from '../components/about/ProfileLeading.vue';
const { data: resumeResponse } = await useAsyncData('resume-english', () =>
	queryContent<Resume>('resume-english').findOne()
);
const resume = resumeResponse;
</script>
