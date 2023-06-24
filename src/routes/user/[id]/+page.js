import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { id } = params;

	// get user from DB

	const user = {
		username: id,
		name: 'John Doe',
		email: 'email@example.com',
		lists: 0,
		edited: 0,
		registeredOn: new Date()
	};

	return user;

	// return error(404, 'message');
}
