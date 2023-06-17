<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import '../../../../app.css';
	/** @type {import('./$types').PageData} */
	export let data;
	/** @type String */
	export let username = '';
</script>

<div class="flex flex-col mt-5 ml-20">
	<h1 class="flex text-6xl text-pink-700 uppercase font-bold">Editar Perfil</h1>
	<div class="flex-col ml-10 mt-4">
		<form>
			<div class="flex flex-row">
				<div class="flex flex-col w-40">
					<label for="name" class="flex text-2xl dark:text-white">Username: </label>
				</div>
				<input
					type="text"
					class="ml-5 rounded-md text-center w-60 overflow-hidden"
					name="username"
					placeholder={data.username}
					readonly
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="email" class="flex text-2xl dark:text-white">Email: </label>
				</div>
				<input
					type="email"
					class="ml-5 rounded-md text-center w-60 overflow-hidden"
					name="email"
					placeholder={data.email}
					readonly
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="nome" class="flex text-2xl dark:text-white">Nome: </label>
				</div>
				<input
					type="text"
					class="ml-5 rounded-md text-center w-60 overflow-hidden"
					name="name"
					placeholder={data.name.split(' ')[0]}
				/>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="apelido" class="flex text-2xl dark:text-white">Apelido: </label>
				</div>
				<input
					type="text"
					class="ml-5 rounded-md text-center w-60 overflow-hidden"
					name="surname"
					placeholder={data.name.split(' ')[1]}
				/>
			</div>
		</form>
	</div>
</div>
