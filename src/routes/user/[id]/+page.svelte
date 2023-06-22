<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import '../../../app.css';
	/** @type {import('./$types').PageData} */
	export let data;
	export let username = '';
</script>

<div class="flex flex-col mt-10">
	<h1 class="flex justify-center text-6xl text-pink-700 uppercase font-bold">{data.name}</h1>
	<h2 class="flex justify-center text-4xl dark:text-white font-bold">{data.username}</h2>
	<h3 class="flex justify-center text-md text-gray-500">{data.email}</h3>
	<h4 class="flex justify-center text-sm text-gray-500">Membro desde: {data.registeredOn}</h4>
	<div class="flex flex-row justify-center mt-7">
		<div class="flex flex-col mr-16">
			<h4 class="flex justify-center text-2xl text-pink-700">Acórdãos Adicionados</h4>
			<p class="flex justify-center text-xl dark:text-white">{data.added}</p>
		</div>
		<div class="flex flex-col mr-16">
			<h4 class="flex justify-center text-2xl text-pink-700">Acórdãos Editados</h4>
			<p class="flex justify-center text-xl dark:text-white">{data.edited}</p>
		</div>
		<div class="flex flex-col mr-16">
			<h4 class="flex justify-center text-2xl text-pink-700">Gostos</h4>
			<p class="flex justify-center text-xl dark:text-white">{data.likes}</p>
		</div>
		<div class="flex flex-col mr-16">
			<h4 class="flex justify-center text-2xl text-pink-700">Guardados</h4>
			<p class="flex justify-center text-xl dark:text-white">{data.saved}</p>
		</div>
	</div>
	{#if data.username === username}
		<div class="flex flex-row justify-center mt-7">
			<a href="/user/{data.username}/edit"><Button>Editar Perfil</Button></a>
		</div>
	{/if}
</div>
