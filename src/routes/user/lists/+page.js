// @ts-nocheck
export async function load({ params, fetch }) {
	const page = params.page.url.searchParams.get('page');
	const orderBy = params.page.url.searchParams.get('orderBy');
	const keywords = params.page.url.searchParams.get('keywords');

	async function getAcordaosSavedByUser(page, orderBy, keywords) {
		if (!page) page = 0;
		if (!orderBy) orderBy = 'data';
		if (!keywords) keywords = '';
		const res = await fetch(
			`https://api.juris.ninja/acordaos/saved?page=${page}&orderBy=${orderBy}&keywords=${keywords}`
		);

		const data = await res.json();
		return data;
	}

	return {
		acordaos: getAcordaosSavedByUser(page, orderBy, keywords)
	};
}
