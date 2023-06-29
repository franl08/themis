// @ts-nocheck
import { BACKEND_URL } from '../../../../global';
import { get } from 'svelte/store';
import { session } from '../../../../stores';

/**@type import("./$types").Actions */
export const actions = {
	default: async ({ request }) => {
		console.log('aqui');
		const formData = await request.formData();
		let data = {};
		for (const [key, value] of formData.entries()) {
			console.log(key, value);
			data[key] = value;
		}

		const result = await fetch(`${BACKEND_URL}/users/${data.username}`, {
			method: 'PUT',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${get(session).token}`
			},
			body: JSON.stringify(data)
		});

		if (result.status !== 200) {
			return {
				success: false,
				error: 'Error updating user.'
			};
		}

		const json = await result.json();

		console.log(json);

		return {
			success: true
		};
	}
};
