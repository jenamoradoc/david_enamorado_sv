<script lang="ts">
	import { page } from '$app/state';
</script>

<header class="flex justify-between">
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/navigation' ? 'page' : undefined}>
				<a href="/navigation">Navigation</a>
			</li>
			<li aria-current={page.url.pathname === '/gradient-logo' ? 'page' : undefined}>
				<a href="/gradient-logo">Gradient Logo</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/website-header') ? 'page' : undefined}>
				<a href="/website-header">WebSite</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/to-do') ? 'page' : undefined}>
				<a href="/to-do">Todo</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #000;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: #000;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] a {
		color: #6868e4;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: #fff;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #4e4eee;
	}
</style>
