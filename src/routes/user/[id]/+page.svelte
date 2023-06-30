<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import '../../../app.css';
	import { session } from '../../../stores';
	import { _data } from './+page.js';
	import { BACKEND_URL } from '../../../global';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { error } from '@sveltejs/kit';
	/** @type {import('./$types').Pageuser} */
	$_data;
	console.log(_data);
	console.log($session.user);

	function promoteUser() {
		if (browser) {
			axios
				.put(`${BACKEND_URL}/user/promote/${username}`, {
					headers: {
						Authorization: `Bearer ${$session.token}`,
					},
				}).then((res) => {
					if (res.status === 200) {
						goto(`/user/${username}`);
					}
					else {
						alert('Não foi possível promover o utilizador');
					}
				});
		}
	}

	function demoteUser() {
		if (browser) {
			axios
				.put(`${BACKEND_URL}/user/demote/${username}`, {
					headers: {
						Authorization: `Bearer ${$session.token}`,
					},
				})
				.then((res) => {
					if (res.status === 200) {
						goto(`/users/search`);
					}
					else {
						alert('Não foi possível despromover o utilizador');
					}
				}).catch((err) => {
					throw error(err);
				});
		}
	}

	function deleteUser() {
		if(browser) {
			axios.delete(`${BACKEND_URL}/user/${username}`, {
				headers: {
					Authorization: `Bearer ${$session.token}`,
				},
			}).then((res) => {
					if (res.status === 200) {
						goto(`/users/search`);
					}
					else {
						alert('Não foi possível eliminar o utilizador');
					}
				}).catch((err) => {
					throw error(err);
				});
		}
	}
</script>
{#if $_data}
<div class="flex flex-col mt-10">
	<h1 class="flex justify-center text-6xl text-pink-700 uppercase font-bold">{$_data.user.firstname} {$_data.user.lastname}</h1>
	<h2 class="flex justify-center text-4xl dark:text-white font-bold">{$_data.user.username}</h2>
	<h3 class="flex justify-center text-md text-gray-500">{$_data.user.email}</h3>
	<h4 class="flex justify-center text-sm text-gray-500">Membro desde: {$_data.user.registeredOn}</h4>
	{#if $_data.user.username === $session.user}
		<div class="flex flex-row justify-center mt-7">
			<a href="/user/edit/{$_data.user.username}"><Button>Editar Perfil</Button></a>
		</div>
	{:else if $session.role === 'MODERADOR'}
		<div class="flex flex-row justify-center mt-7">
			{#if $_data.user.role === 'USER'}
				<button on:click={promoteUser()}><Button>Promover a Moderador</Button></button>
			{:else if $_data.user.role === 'MODERADOR'}
				<button on:click={demoteUser()}><Button>Despromover a Utilizador</Button></button>
			{/if}
			<button on:click={deleteUser()}><Button>Eliminar Utilizador</Button></button>
		</div>
	{/if}
</div>
{/if}