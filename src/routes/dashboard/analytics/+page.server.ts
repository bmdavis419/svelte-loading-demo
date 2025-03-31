export const load = async () => {
	const fakeData = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		name: `Item ${i + 1}`,
		value: Math.random() * 1000
	}));

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		fakeData
	};
};
