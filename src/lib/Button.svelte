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
		class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
	>
		<slot />
	</button>
{/if}
