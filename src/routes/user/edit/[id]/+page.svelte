<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import '../../../../app.css';
	/** @type {import('./$types').PageData} */
	export let data;
	let error = false;
	let new_password = '';
	let new_password2 = '';
	let password = '';

	function updateData() {
		// dar upload dos dados para a BD e aguardar resposta
		// se a resposta for positiva, redirect, senão, mostrar erro
		window.location = `/user/${data.username}`;
	}
</script>

<div class="flex flex-col mt-5">
	<h1 class="flex text-6xl ml-20 text-pink-700 uppercase font-bold">Editar Perfil</h1>
	<div class="flex-col mt-4 justify-center items-center">
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
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-40">
					<label for="password" class="flex text-xl dark:text-white">Password Atual: </label>
				</div>
				<input
					type="password"
					class="ml-5 rounded-md text-center w-60 overflow-hidden stroke-pink-700"
					name="password"
					placeholder="password"
					bind:value={password}
				/>
			</div>
			{#if new_password !== new_password2}
				<p class="text-red-500 mt-2">A nova password não coincide.</p>
				<div class="flex mt-5">
					<button on:click|preventDefault><Button>Gravar Alterações</Button></button>
				</div>
			{:else if new_password.length < 8 && new_password.length > 0}
				<p class="text-red-500 mt-2">A password tem de ter pelo menos 8 caracteres.</p>
				<div class="flex mt-5">
					<button on:click|preventDefault><Button>Gravar Alterações</Button></button>
				</div>
			{:else if password.length <= 0}
				<p class="text-red-500 mt-2">Insira a palavra-passe atual para gravar as alterações.</p>
				<div class="flex mt-5">
					<button on:click|preventDefault><Button>Gravar Alterações</Button></button>
				</div>
			{:else if error}
				<p class="text-red-500 mt-2">Não foi possível atualizar os seus dados.</p>
				<div class="flex mt-5">
					<button on:click={updateData}><Button>Gravar Alterações</Button></button>
				</div>
			{:else}
				<div class="flex mt-5">
					<button on:click={updateData}><Button>Gravar Alterações</Button></button>
				</div>
			{/if}
		</form>
	</div>
</div>
