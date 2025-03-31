<script>
	const { children } = $props();
</script>

<div class="flex h-screen">
	<aside class="w-64 bg-gray-800 p-4 text-white">
		<nav>
			<ul class="space-y-2">
				<li><a href="/dashboard" class="hover:text-gray-300">Overview</a></li>
				<li><a href="/dashboard/analytics" class="hover:text-gray-300">Analytics (slow)</a></li>
				<li><a href="/dashboard/settings" class="hover:text-gray-300">Settings (fast)</a></li>
			</ul>
		</nav>
	</aside>

	<main class="flex-1 bg-gray-100 p-6">
		{@render children()}
	</main>
</div>
