<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { username, role } from '../stores';
	let open = false;
	username.set("john")
	role.set("ADMIN")
	let simpleOptions = [
		{ name: 'Iniciar Sessão', href: '/login' },
		{ name: 'Registar', href: '/register' },
		{ name: 'Constituição', href: 'https://www.parlamento.pt/Legislacao/Paginas/ConstituicaoRepublicaPortuguesa.aspx'},
		{ name: 'Sobre Nós', href: '/about' }
	];
	let loggedInOptions = [
		{ name: 'Página Principal', href: '/' },
		{name : 'Acórdãos', href: '/acordaos'},
		{ name: 'Listas', href: `/user/lists` },
		{ name: 'Perfil', href: `/user/${$username}` },
		{ name: 'Sobre Nós', href: '/about' },
		{ name: 'Terminar Sessão', href: '/logout' }
		// ...
	];
	let adminOptions = loggedInOptions.concat([{ name: 'Reviews', href: '/reviews' }]);

	function toggleSidebar() {
		open = !open;
	}
</script>

{#if open}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex flex-col h-screen bg-white dark:bg-indigo-950" on:click={toggleSidebar}>
	{#if $username !== '' && $role === "ADMIN"}
		<Sidebar bind:open options={adminOptions} />
	{:else if $username !== ''}
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
	{#if $username !== "" && $role === "ADMIN"}
		<Sidebar bind:open options={adminOptions} />
	{:else if $username !== ""}
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
