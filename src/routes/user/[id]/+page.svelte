<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import '../../../app.css';
	import { session } from '../../../stores';
	import { _data } from './+page.js';
	/** @type {import('./$types').Pageuser} */
	$_data;
	console.log(_data);
	let displayInfo = false;
	//$: user, updateUser();
	//console.log(user);
	console.log($session.user);

	/*function updateUser() {
		if(user && user?.success) {
			displayInfo = true;
			user = user.user;
		} else if(user) {
			error = user.error;
		}
	}
*/
</script>
{#if $_data}
<div class="flex flex-col mt-10">
	<h1 class="flex justify-center text-6xl text-pink-700 uppercase font-bold">{$_data.user.firstname} {$_data.user.lastname}</h1>
	<h2 class="flex justify-center text-4xl dark:text-white font-bold">{$_data.user.username}</h2>
	<h3 class="flex justify-center text-md text-gray-500">{$_data.user.email}</h3>
	<h4 class="flex justify-center text-sm text-gray-500">Membro desde: {$_data.user.registeredOn}</h4>
	{#if $_data.user.username === $session.user || $session.role === 'ADMIN'}
		<div class="flex flex-row justify-center mt-7">
			<a href="/user/edit/{$_data.user.username}"><Button>Editar Perfil</Button></a>
		</div>
	{/if}
</div>
{/if}