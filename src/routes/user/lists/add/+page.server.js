// @ts-nocheck
import { BACKEND_URL } from '../../../../global';
import { session } from '../../../../stores';
import { get } from 'svelte/store';
import axios from 'axios';

/**@type import("./$types").Actions */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		let data = {};
		for (const [key, value] of formData.entries()) {
			console.log(key, value);
			data[key] = value;
		}

		data['username'] = get(session).user;

		const result = await axios.post(`${BACKEND_URL}/lists`, data, {
			headers: {
				Authorization: `Bearer ${get(session).token}`
			}
		});

		if (result.status !== 200) {
			return {
				success: false,
				error: 'Error creating user.'
			};
		}

		return {
			success: true
		};
	}
};
