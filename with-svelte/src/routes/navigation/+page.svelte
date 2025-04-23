<script>
	import NavLink from '../../components/NavLink.svelte';
	let activeLink = 'Branding';

	/**
	 * @param {string} link
	 */
	function setActive(link) {
		activeLink = link;
	}
</script>

<svelte:head>
	<title>Navigation</title>
	<meta name="description" content="Test Navigation hover" />
</svelte:head>
<div
	class="bg-linear-180 flex min-h-screen items-center justify-center from-[#000013] to-[#000e40] text-white"
>
	<nav class="nav-container" aria-label="Main navigation">
		<ul class="flex justify-center gap-12">
			<NavLink
				label="Animation"
				href="#animation"
				isActive={activeLink === 'Animation'}
				on:click={() => setActive('Animation')}
			/>
			<NavLink
				label="Branding"
				href="#branding"
				isActive={activeLink === 'Branding'}
				on:click={() => setActive('Branding')}
			/>
			<NavLink
				label="Illustration"
				href="#illustration"
				isActive={activeLink === 'Illustration'}
				on:click={() => setActive('Illustration')}
			/>
		</ul>
	</nav>
</div>
