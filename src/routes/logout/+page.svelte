<script>
	import { goto } from '$app/navigation';
	import { username, role, jwt } from '../../stores';

	// clear data
	username.set('');
	role.set('');
	jwt.set('');

	goto('/');
</script>
