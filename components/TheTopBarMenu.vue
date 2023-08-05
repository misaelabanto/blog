<template>
	<nav>
		<button
			@click="showMenu(!show)"
			:class="{
				'i-mdi-close': show,
				'i-mdi-menu': !show,
			}"
			class="text-xl sm:hidden"
		></button>
		<ul
			:class="{
				hidden: !show,
			}"
			class="sm:flex gap-4 absolute right-4 md:relative transition-all duration-1s"
		>
			<li>
				<NuxtLink
					class="hover:underline hover:underline-dotted hover:underline-blue"
					to="/"
					>Inicio</NuxtLink
				>
			</li>
			<li>
				<NuxtLink
					class="hover:underline hover:underline-dotted hover:underline-blue"
					to="/about"
					>Sobre mí</NuxtLink
				>
			</li>
			<li>
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
