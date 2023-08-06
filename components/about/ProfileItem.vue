<template>
	<div class="flex gap-2 items-center">
		<div :class="icon" class="text-4xl"></div>
		<a
			:href="profile.url"
			target="_blank"
			referrerpolicy="no-referrer"
			class="hover:underline hover:underline-blue hover:underline-dotted"
			>{{ profile.username }}</a
		>
	</div>
</template>

<script setup lang="ts">
import { Profile } from '../../interfaces/ResumeBasics';
const props = defineProps<{ profile: Profile }>();
const icons: Record<string, string> = {
	Telegram: 'i-logos-telegram',
	Github: 'i-logos-github-icon',
	Gitlab: 'i-logos-gitlab',
	Twitter: 'i-logos-twitter',
	LinkedIn: 'i-logos-linkedin-icon',
	Pluralsight: 'i-logos-pluralsight-icon',
};
const icon = computed(() => icons[props.profile.network]);
</script>
