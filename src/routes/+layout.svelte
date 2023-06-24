<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import Navbar from '$lib/Navbar.svelte';
	let open = false;
	const username = 'username';
	let simpleOptions = [
		{ name: 'Página Principal', href: '/' },
		{ name: 'Iniciar Sessão', href: '/login' },
		{ name: 'Registar', href: '/register' },
		{ name: 'Sobre Nós', href: '/about' }
	];
	let loggedInOptions = [
		{ name: 'Página Principal', href: '/' },
		{ name: 'Listas', href: `/user/lists` },
		{ name: 'Perfil', href: `/user/${username}` },
		{ name: 'Sobre Nós', href: '/about' },
		{ name: 'Terminar Sessão', href: '/logout' }
		// ...
	];
	let adminOptions = loggedInOptions.concat([{ name: 'Reviews', href: '/reviews' }]);
	export let loggedIn = true;
	export let isAdmin = true;

	function toggleSidebar() {
		open = !open;
	}
</script>

{#if open}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex flex-col h-screen bg-white dark:bg-indigo-950" on:click={toggleSidebar}>
	{#if loggedIn && isAdmin}
		<Sidebar bind:open options={adminOptions} />
	{:else if loggedIn}
		<Sidebar bind:open options={loggedInOptions} />
	{:else}
		<Sidebar bind:open options={simpleOptions} />
	{/if}
	<Navbar bind:sidebar={open} />
	<div class="h-5/6 w-auto">
		<slot />
	</div>

	<div class="flex justify-center w-screen text-sm text-slate-600 dark:text-white">
		<p>RPCW2023</p>
	</div>
</div>

{:else}
<div class="flex flex-col h-screen bg-white dark:bg-indigo-950">
	{#if loggedIn && isAdmin}
		<Sidebar bind:open options={adminOptions} />
	{:else if loggedIn}
		<Sidebar bind:open options={loggedInOptions} />
	{:else}
		<Sidebar bind:open options={simpleOptions} />
	{/if}
	<Navbar bind:sidebar={open} />
	<div class="h-5/6 w-auto">
		<slot />
	</div>

	<div class="flex justify-center w-screen text-sm text-slate-600 dark:text-white">
		<p>RPCW2023</p>
	</div>
</div>
{/if}
