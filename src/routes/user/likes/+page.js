// @ts-nocheck
import { id } from '$lib/stores/user';
export async function load({ params, fetch }) {
	const page = params.page.url.searchParams.get('page');
	const orderBy = params.page.url.searchParams.get('orderBy');
	const keywords = params.page.url.searchParams.get('keywords');

	async function getAcordaosLikedByUser(page, orderBy, keywords) {
		if (!page) page = 0;
		if (!orderBy) orderBy = 'data';
		if (!keywords) keywords = '';
		const res = await fetch(
			`https://api.juris.ninja/acordaos/likes?page=${page}&orderBy=${orderBy}&keywords=${keywords}&user=${id}`
		);

		const data = await res.json();
		return data;
	}

	return {
		acordaos: getAcordaosLikedByUser(page, orderBy, keywords)
	};
}
