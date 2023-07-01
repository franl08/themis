<script>
	// @ts-nocheck
	import Button from '$lib/Button.svelte';

	export let data;

	$: data;

</script>

<div class="flex flex-col mt-5">
	<h1 class="flex text-6xl ml-20 text-pink-700 uppercase font-bold">Listas</h1>
</div>
	{#if data?.success}
		{#if data.listas.length < 1}
			<div class="flex flex-col mt-4 dark:text-white ml-20">Não há listas</div>
		{:else}
			<div class="flex flex-col mt-4 dark:text-white ml-20 justify-evenly">
			{#each data.listas as lista}
			<div class="flex flex-col mt-4">
				<div class="flex flex-row">
					<div class="flex w-2/3">
							<p class="text-xl font-bold">Nome: </p>
							<p class="text-md ml-2">{lista.nome}</p>
					</div>
					<a href="/user/lists/{lista._id}" class="ml-20"><Button>Ver Lista</Button></a>
				</div>
			</div>
			{/each}
			</div>
		{/if}
	{/if}