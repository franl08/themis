<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import Navbar from '$lib/Navbar.svelte';
	let open = false;
	let simpleOptions = [
		{ name: 'Home', href: '/' },
		{ name: 'Login', href: '/login' },
		{ name: 'Register', href: '/register' }
	];
	let loggedInOptions = [
		{ name: 'Home', href: '/' },
		{ name: 'Saved', href: '/saved' },
		{ name: 'Profile', href: '/profile' },
		{ name: 'Logout', href: '/logout' }
		{ name: 'Página Principal', href: '/' },
		{ name: 'Listas', href: `/user/lists` },
		{ name: 'Perfil', href: `/user` },
		{ name: 'Sobre Nós', href: '/about' },
		{ name: 'Terminar Sessão', href: '/logout' }
		// ...
	];
	let adminOptions = loggedInOptions.concat([{ name: 'Reviews', href: '/review' }]);
	export let loggedIn = false;
	export let isAdmin = false;

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

	<div class="flex justify-center text-sm text-slate-600 dark:text-white">
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
