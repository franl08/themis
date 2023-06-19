<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import LawHammerIcon from '$lib/LawHammerIcon.svelte';
	export let data;

	$: totalItems = data.products.total;
	$: itemsPerPage = data.products.numberItems;
	$: searchKeywords = page.params.keywords;
	$: orderBy = page.params.orderBy;
	$: totalPages = Math.ceil(totalItems / itemsPerPage);
	$: currentPage = Number($page.params.page) - 1;
</script>

<div class="flex flex-col mt-5">
	<h1 class="flex text-6xl ml-20 text-pink-700 uppercase font-bold">Acórdãos</h1>
	<div class="flex-col mt-4 justify-center items-center">
		<form class="flex flex-col items-center" action="/user/saved" method="get">
			<div class="relative">
				<input
					class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
					placeholder={searchKeywords ? searchKeywords : 'Pesquisar...'}
					type="text"
					name="keywords"
				/>
				<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
					<LawHammerIcon classAttribute="w-5 h-5" />
				</div>
			</div>
		</form>
		<table class="dark-text-white">
			<tr>
				<a href="/user/saved?orderBy=acordao&keywords={searchKeywords ? searchKeywords : ''}"
					><th>Acórdão</th></a
				>
				<a href="/user/saved?orderBy=relator&keywords={searchKeywords ? searchKeywords : ''}"
					><th>Relator</th></a
				>
				<a href="/user/saved?orderBy=orgao&keywords={searchKeywords ? searchKeywords : ''}"
					><th>Órgão Julgador</th></a
				>
				<a href="/user/saved?orderBy=data&keywords={searchKeywords ? searchKeywords : ''}"
					><th>Data</th></a
				>
			</tr>
			{#each data.acordaos.acordaos as acordao}
				<a href="/acordaos/{acordao.id}">
					<tr>
						<td>{acordao.numero}</td>
						<td>{acordao.relator}</td>
						<td>{acordao.orgaoJulgador}</td>
						<td>{acordao.data}</td>
					</tr>
				</a>
			{/each}
		</table>
		<div class="mt-3 dark:text-white">
			{#each Array(totalPages) as _, i}
				<a
					href="/user/saved?page={i + 1}&keywords={searchKeywords
						? searchKeywords
						: ''}&orderBy={orderBy ? orderBy : ''}"
					class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 {currentPage ===
					i
						? 'text-pink-900'
						: ''}"
					aria-current="page"
				>
					{i + 1}
				</a>
			{/each}
		</div>
	</div>
</div>
