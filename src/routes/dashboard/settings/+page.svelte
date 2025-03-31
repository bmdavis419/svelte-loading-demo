<script lang="ts">
	const { data } = $props();
</script>

<div class="flex flex-col gap-4">
	<h3 class="text-lg font-bold">slow settings data:</h3>

	{#await data.fakeSettingsData}
		<div>loading...</div>
	{:then fakeSettingsData}
		<div>theme: {fakeSettingsData.theme}</div>
		<div>language: {fakeSettingsData.language}</div>
		<div>notifications: {fakeSettingsData.notifications}</div>
	{/await}

	<h3 class="text-lg font-bold">instant settings data:</h3>

	<div>private: {data.instantFakeData.private}</div>
</div>
