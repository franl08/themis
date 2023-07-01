// @ts-nocheck

import { BACKEND_URL } from '../../global.js';
import { session } from '../../stores.js';
import { get } from 'svelte/store';
import axios from 'axios';

export async function load({ params }) {
	async function getListas(id) {
		return axios
			.get(BACKEND_URL + `/listas/${id}`, {
				headers: {
					Authorization: `Bearer ${get(session.token)}`
				}
			})
			.then((res) => {
				console.log(res.data);
				return {
					listas: res.data.lists,
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

	return getListas(params.id);
}
