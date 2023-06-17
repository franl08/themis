<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import Modal from '$lib/Modal.svelte';
	import '../../../../app.css';
	/** @type {import('./$types').PageData} */
	export let data;
	/** @type String */
	export let username = data.username;
	let modal = false;
	let new_password = '';
	let new_password2 = '';

	function showModal() {
		modal = !modal;
	}
</script>

<div class="flex flex-col mt-5 ml-20">
	<h1 class="flex text-6xl text-pink-700 uppercase font-bold">Editar Perfil</h1>
	<div class="flex-col ml-10 mt-4 justify-center items-center">
		<form class="flex flex-col items-center after:justify-center mt-10">
			<div class="flex flex-row">
				<div class="flex flex-col w-40">
					<label for="name" class="flex text-xl dark:text-white">Username: </label>
				</div>
				<input
					type="text"
					class="ml-5 rounded-md text-center w-60 overflow-hidden bg-gray-200 stroke-pink-700"
					name="username"
					placeholder={data.username}
					readonly
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="email" class="flex text-xl dark:text-white stroke-pink-700">Email: </label>
				</div>
				<input
					type="email"
					class="ml-5 rounded-md text-center w-60 overflow-hidden bg-gray-200 stroke-pink-700"
					name="email"
					placeholder={data.email}
					readonly
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="nome" class="flex text-xl dark:text-white">Nome: </label>
				</div>
				<input
					type="text"
					class="ml-5 rounded-md text-center w-60 overflow-hidden stroke-pink-700"
					name="name"
					placeholder={data.name.split(' ')[0]}
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="apelido" class="flex text-xl dark:text-white">Apelido: </label>
				</div>
				<input
					type="text"
					class="ml-5 rounded-md text-center w-60 overflow-hidden stroke-pink-700"
					name="surname"
					placeholder={data.name.split(' ')[1]}
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="password" class="flex text-xl dark:text-white">Nova Password: </label>
				</div>
				<input
					type="password"
					class="ml-5 rounded-md text-center w-60 overflow-hidden stroke-pink-700"
					name="password"
					placeholder="password"
					bind:value={new_password}
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="password" class="flex text-xl dark:text-white">Repita a Password: </label>
				</div>
				<input
					type="password"
					class="ml-5 rounded-md text-center w-60 overflow-hidden stroke-pink-700"
					name="password"
					placeholder="password"
					bind:value={new_password2}
				/>
			</div>
			{#if new_password !== new_password2}
				<p class="text-red-500 mt-2">As passwords não coincidem</p>
				<div class="flex mt-5">
					<button on:click|preventDefault><Button>Submit</Button></button>
				</div>
			{:else}
				<div class="flex mt-5">
					<button on:click={showModal}><Button>Submit</Button></button>
				</div>
			{/if}
		</form>
		{#if modal}
			<Modal>Insira a sua password para confirmar a alteração dos dados</Modal>
		{/if}
	</div>
</div>
