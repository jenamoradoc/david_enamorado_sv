<svelte:head>
	<title>Gradient</title>
	<meta name="description" content="Gradient Test Tailwindcss" />
</svelte:head>

<div
	class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-white via-[#e0c6fc] to-[#85b2fa]"
>
	<div
		class="flex size-[240px] flex-col items-center gap-1.5 rounded-[5rem] bg-white p-8 shadow-xl"
		aria-label="Bing logo"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="404.63"
			width="282"
			viewBox="0 0 282 404.63"
			class="h-auto w-24 fill-[#505050]"
			fill="currentColor"
			role="img"
			aria-labelledby="bing-logo-title"
		>
			<title id="bing-logo-title">Bing logo</title>
			<g transform="translate(312 -795.67)">
				<path
					d="m-311.5 796.169 80.6273 28.364v283.808l113.567-65.5599-55.6796-26.1246-35.1274-87.4307 178.939 62.8645v91.3952l-201.654 116.31-80.6733-44.875z"
				/>
			</g>
		</svg>
		<p class="text-3xl font-medium text-[#505050]">Bing</p>
	</div>
</div>
