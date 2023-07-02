// @ts-nocheck

import { BACKEND_URL } from '../../../global';
import { session } from '../../../stores';
import { get } from 'svelte/store';
import axios from 'axios';

export async function load() {
	let username = get(session).user;
	let token = get(session).token;

	async function getListsByUser(username, token) {
		return axios
			.get(BACKEND_URL + `/lists?username=${username}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((res) => {
				console.log(res.data);
				return {
					listas: res.data,
					success: true
				};
			})
			.catch((err) => {
				console.log(err);
				return {
					success: false,
					error: err
				};
			});
	}

	return getListsByUser(username, token);
}
