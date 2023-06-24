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
	<div class="flex flex-row mt-7 ml-40 mr-40 justify-evenly">
		<div class="flex flex-col">
			<h4 class="flex text-2xl text-pink-700">Sugestões</h4>
			<p class="flex justify-center text-xl dark:text-white">{data.edited}</p>
		</div>
		<div class="flex flex-col">
			<h4 class="flex text-2xl text-pink-700">Listas</h4>
			<p class="flex justify-center text-xl dark:text-white">{data.lists}</p>
		</div>
	</div>
	{#if data.username === username}
		<div class="flex flex-row justify-center mt-7">
			<a href="/user/{data.username}/edit"><Button>Editar Perfil</Button></a>
		</div>
	{/if}
</div>
