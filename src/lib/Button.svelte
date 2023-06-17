<script>
	import '../app.css';
	export let type = 'primary';
</script>

{#if type === 'primary'}
	<button class="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded">
		<slot />
	</button>
{:else if type === 'secondary'}
	<button
		class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
	>
		<slot />
	</button>
{/if}
