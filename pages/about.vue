<template>
	<div>
		{{ resume }}
	</div>
</template>

<script setup lang="ts">
import type { Resume } from '~/interfaces/Resume';
const { data: resumeResponse } = await useAsyncData('resume-english', () =>
	queryContent<{ body: Resume }>('resume-english').findOne()
);
const resume = resumeResponse;
</script>
