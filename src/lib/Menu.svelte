<script>
	export let loggedIn = true;
	export let username = 'username';
</script>

{#if loggedIn}
	<nav class="hidden dark:text-white text-pink-700 uppercase text-bold sm:block">
		<p class="mr-4 dark:hover:text-gray-700 hover:text-pink-800 hover:no-underline">
			Olá, {username}!
		</p>
	</nav>
{:else}
	<nav class="hidden dark:text-white text-pink-700 uppercase text-bold sm:block">
		<a href="/login" class="mr-4 dark:hover:text-gray-700 hover:text-pink-800 hover:no-underline"
			>Login</a
		>
	</nav>
{/if}
