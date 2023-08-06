<template>
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-8">
		<ProfileItem v-for="item in items" :key="item.id" :profile="item" />
	</section>
</template>

<script setup lang="ts">
import { Profile } from '../../interfaces/ResumeBasics';
import ProfileItem from './ProfileItem.vue';

defineProps<{ items: Profile[] }>();
</script>
