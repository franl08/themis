import { BACKEND_URL } from '../../../global';
import { session } from '../../../stores';
import { get, writable } from 'svelte/store';
import axios from 'axios';
import { error } from '@sveltejs/kit';

export const _data = writable({});

export async function load({ params }) {
	const { id } = params;
	return {
		id: id
	};
	/*
	console.log(get(session).token)
	axios
		.get(`${BACKEND_URL}/users/${id}`, {
			headers: {
				Authorization: `Bearer ${get(session).token}`
			}
		})
		.then((res) => {
			if (res.status !== 200) {
				_data.set({
					success: false,
					error: 'User not found'
				});
				throw error(res.status, 'User not found');
			} else {
				_data.set({ user: res.data, success: true });
			}
		})
		.catch((err) => {
			console.log(err);
			throw error(500, err);
		});
		*/
}
