import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { id } = params;

	// get user from DB

	const user = {
		username: id,
		name: 'John Doe',
		email: 'email@example.com',
<<<<<<< HEAD
		lists: 0,
		edited: 0,
=======
		likes: 0,
		added: 0,
		edited: 0,
		saved: 0,
>>>>>>> 6ed47f97a797b07374b0593331d26aea8c03b2c1
		registeredOn: new Date()
	};

	return user;

	// return error(404, 'message');
}
