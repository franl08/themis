<script>
	// @ts-nocheck
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';

	export let data;

	let params = $page.url.searchParams;
	console.log(params)
	let searchKeywords = params.get('keywords');
	console.log(searchKeywords)
	let acordaos, currentPage, totalPages, totalItems, itemsPerPage, orderType, orderBy;


	if(params.get("orderBy")) {
		order = params.get("orderBy").split(";");
		orderBy = order[0];
		orderType = order[1];
	} else {
		orderType = 'desc';
		orderBy = 'date';
	}

	$: acordaos, totalItems, itemsPerPage, totalPages, currentPage;
	$: handleData();

	function handleData() {
		if (data.success) {
			acordaos = data.acordaos;
			totalItems = data.totalItems;
			itemsPerPage = data.itemsPerPage;

			totalPages = Math.ceil(totalItems / itemsPerPage);
			if(params.get(page)) {
				currentPage = Number(params.get(page)) - 1;
			}
			else {
				currentPage = 0;
			}
		}
	}

	function handleOrderBy(order) {
		orderBy = order;
		if(browser) {
			goto(`/acordaos?orderBy=${orderBy};${orderType}&keywords=${searchKeywords ? searchKeywords : ''}`);
		}
	}

	function handleOrderType(order) {
		orderType = order;
		if(browser) {
			goto(`/acordaos?orderBy=${orderBy};${orderType}&keywords=${searchKeywords ? searchKeywords : ''}`);
		}
	}

</script>

<div class="flex flex-col mt-5 w-full">
	<h1 class="flex text-6xl ml-20 text-pink-700 uppercase font-bold">Acórdãos</h1>
	<div class="flex-col mt-4 justify-center items-center ml-20 w-2/3">
		<form class="flex flex-col items-center" action="/acordaos" method="get">
				<input
					class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
					placeholder={searchKeywords ? searchKeywords : 'Pesquisar...'}
					type="text"
					name="keywords"
					value:bind:searchKeywords
				/>
		</form>
		<div class="flex flex-col">
			<h4 class="text-md mt-4 dark:text-white">Ordenar por:</h4>
		<div class="flex flex-row mt-2 ml-10">
			<button on:click={() => handleOrderBy("_id")}><Button>_id</Button></button>
			<button class="ml-2" on:click={() => handleOrderBy("processo")}><Button>Processo</Button></button>
			<button class="ml-2" on:click={() => handleOrderBy("data")}><Button>Data do Acórdão</Button></button>
			<button class="ml-2" on:click={() => handleOrderBy("url")}><Button>URL</Button></button>
		</div>
		<div class="flex flex-col">
			<h4 class="text-md mt-4 dark:text-white">Tipo de Ordenação:</h4>
		<div class="flex flex-row mt-2 ml-10">
			<button on:click={() => handleOrderType("asc")}><Button>Ascendente</Button></button>
			<button class="ml-2" on:click={() => handleOrderType("desc")}><Button>Descendente</Button></button>
		</div>
	</div>
	{#if data?.success}
		<div class="flex flex-col mt-2 dark:text-white">
		{#each acordaos as acordao}
		<div class="flex flex-col mt-2">
			<div class="flex flex-row justify-evenly">
				<div class="flex flex-col justify-evenly">
					<div class="flex flex-row">
						<p class="text-2xl font-bold">Processo: </p>
						<p class="text-2xl ml-2">{acordao.processo}</p>
					</div>
					<div class="flex flex-row">
						<p class="text-2xl font-bold">Data do Acórdão: </p>
						<p class="text-2xl ml-2">{acordao.data}</p>
					</div>
					<div class="flex flex-row">
						<p class="text-2xl font-bold">URL: </p>
						<p class="text-2xl ml-2">{acordao.url}</p>
					</div>
				</div>
				<a href="/acordaos/{acordao._id}"><Button>Ver Acórdão</Button></a>
			</div>
		</div>
		{/each}
		</div>
		<div class="mt-3 dark:text-white">
			{#if currentPage > 0 && currentPage < totalPages - 1}
			<div class="flex flex-row justify-evenly">
				<a
					href="/acordaos?page={currentPage - 1}&keywords={searchKeywords
						? searchKeywords
						: ''}&orderBy={orderBy ? `${orderBy};${orderType}` : '_id;desc'}"
				>
					<Button>Anterior</Button>
				</a>
				<a
				href="/acordaos?page={currentPage + 1}&keywords={searchKeywords
					? searchKeywords
					: ''}&orderBy={orderBy ? `${orderBy};${orderType}` : '_id;desc'}"
				>
					<Button>Próxima</Button>
				</a>
			</div>
			{:else if currentPage === 0 && currentPage < totalPages - 1}
			<div class="flex flex-row justify-evenly">
				<Button type="secondary">Anterior</Button>
				<a
				href="/acordaos?page={currentPage + 1}&keywords={searchKeywords
					? searchKeywords
					: ''}&orderBy={orderBy ? `${orderBy};${orderType}` : '_id;desc'}"
				>
					<Button>Próxima</Button>
				</a>
			</div>
			{:else if currentPage === 0 && currentPage === totalPages - 1}
			<div class="flex flex-row justify-evenly">
				<Button type="secondary">Anterior</Button>
				<Button type="secondary">Próxima</Button>
			</div>
			{:else if currentPage > 0 && currentPage === totalPages - 1}
			<div class="flex flex-row justify-evenly">
				<a
				href="/acordaos?page={currentPage - 1}&keywords={searchKeywords
					? searchKeywords
					: ''}&orderBy={orderBy ? `${orderBy};${orderType}` : '_id;desc'}"
				>
					<Button>Anterior</Button>
				</a>
				<Button type="secondary">Próxima</Button>
			</div>
			{/if}
		</div>
	{/if}
	</div>
</div>
</div>