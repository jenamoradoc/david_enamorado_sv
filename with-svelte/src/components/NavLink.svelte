<script>
	export let href = '#';
	export let label = 'Link';
	export let isActive = false;

	function handleClick() {
		console.log(`Navigating to ${href}`);
	}

	$: dynamicClasses = [
		!isActive && 'opacity-50',
		isActive && 'opacity-100',
		isActive && 'after:w-1/2',
		isActive && 'after:opacity-100'
	]
		.filter(Boolean)
		.join(' ');
</script>

<li class="relative">
	<a
		{href}
		class={`z-1 hover:after:scale-x-115 relative text-xl font-bold transition-opacity duration-500 after:absolute after:-bottom-5 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:rounded-sm after:bg-white after:transition-all after:duration-500 after:content-[''] hover:opacity-100 hover:after:w-1/2 hover:after:opacity-100 ${dynamicClasses}`}
		on:click={handleClick}
		aria-current={isActive ? 'page' : undefined}
		{...$$restProps}
	>
		{label}
	</a>
</li>
