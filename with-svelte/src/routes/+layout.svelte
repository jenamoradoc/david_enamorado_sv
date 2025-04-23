<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main>
		{@render children()}
	</main>
</div>
