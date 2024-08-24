<template>
	<nav>
		<button
			@click="showMenu(!show)"
			:class="{
				'i-mdi-close': show,
				'i-mdi-menu': !show,
			}"
			class="text-xl sm:hidden mr-4"
		></button>
		<ul
			:class="{
				hidden: !show,
			}"
			class="sm:flex gap-4 absolute right-4 md:relative transition-all duration-1s md:bg-none bg-white m-2 pt-2 px-4 shadow-lg md:shadow-none"
		>
			<li class="h-8">
				<NuxtLink
					class="hover:underline hover:underline-dotted hover:underline-blue"
					to="/"
					>Inicio</NuxtLink
				>
			</li>
			<li class="h-8">
				<NuxtLink
					class="hover:underline hover:underline-dotted hover:underline-blue"
					href="https://rxresu.me/misaelabanto/english"
					>Resume/CV</NuxtLink
				>
			</li>
			<li class="h-8">
				<NuxtLink
					class="hover:underline hover:underline-dotted hover:underline-blue"
					to="/contact"
					>Contacto</NuxtLink
				>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
const show = ref(false);
const showMenu = (showMenu: boolean) => (show.value = showMenu);
</script>
