<script>
	const { data } = $props();
</script>

<div>analytics data:</div>

<div>
	{#each data.fakeData as item}
		<div>{item.value}</div>
	{/each}
</div>
