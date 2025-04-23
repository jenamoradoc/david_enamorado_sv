<script>
	import { writable } from 'svelte/store';

	const tasks = writable([
		{ id: 1, title: 'Buy new sweatshirt', completed: true },
		{ id: 2, title: 'Read an article', completed: true },
		{ id: 3, title: 'Write blog post', completed: false },
		{ id: 4, title: 'Watch Mr Robot', completed: false },
		{ id: 5, title: 'Run', completed: false }
	]);

	let newTask = '';

	function addTask() {
		if (!newTask.trim()) return;
		tasks.update((prev) => [
			...prev,
			{
				id: Date.now(),
				title: newTask,
				completed: false
			}
		]);
		newTask = '';
	}

	/**
	 * @param {number} id
	 */
	function toggleTask(id) {
		tasks.update((prev) =>
			prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
		);
	}
</script>

<svelte:head>
	<title>Todo App</title>
	<meta name="description" content="Todo maked with SvelteKit" />
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="relative w-full max-w-sm bg-white pb-12 shadow-lg">
		<!-- Header -->
		<div class="border-b-4 border-gray-200 p-6 pb-4 text-center">
			<h1 class="text-4xl font-bold text-gray-800">December</h1>
			<p class="mt-2 text-base font-bold text-indigo-300">Tuesday, December 22</p>
		</div>

		<div class="relative p-4">
			<ul>
				{#each $tasks as task (task.id)}
					<li class="flex items-center justify-between px-0 py-3 transition-colors">
						<div
							class="select-none text-lg font-medium"
							class:text-gray-300={task.completed}
							class:line-through={task.completed}
						>
							{task.title}
						</div>

						<button
							on:click={() => toggleTask(task.id)}
							class="flex cursor-pointer items-center justify-center transition-colors"
							class:text-green-500={task.completed}
							class:text-gray-300={!task.completed}
						>
							{#if task.completed}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="size-6"
								>
									<circle cx="12" cy="12" r="10" />
									<path d="M8 14s1.5 2 4 2 4-2 4-2" />
									<line x1="9" x2="9.01" y1="9" y2="9" />
									<line x1="15" x2="15.01" y1="9" y2="9" />
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="size-6"
								>
									<circle cx="12" cy="12" r="10" />
									<line x1="8" x2="16" y1="15" y2="15" />
									<line x1="9" x2="9.01" y1="9" y2="9" />
									<line x1="15" x2="15.01" y1="9" y2="9" />
								</svg>
							{/if}
						</button>
					</li>
				{/each}
			</ul>

			<input
				type="text"
				bind:value={newTask}
				placeholder="Add Task"
				class="mt-6 w-full border border-indigo-200 p-4 transition-colors placeholder:text-indigo-200 focus:border-indigo-500 focus:outline-none"
			/>
		</div>

		<button
			on:click={addTask}
			class="absolute -bottom-5 right-1/2 translate-x-1/2 cursor-pointer rounded-full bg-green-500 px-10 py-3 font-bold text-white shadow transition-colors hover:bg-green-600 disabled:cursor-not-allowed"
			disabled={!newTask.trim()}
		>
			Add
		</button>
	</div>
</div>
