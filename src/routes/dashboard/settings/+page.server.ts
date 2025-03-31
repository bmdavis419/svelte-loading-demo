export const load = async () => {
	const fakeSettingsData = getFakeSettingsData();

	const instantFakeData = {
		private: true
	};

	return {
		fakeSettingsData,
		instantFakeData
	};
};

const getFakeSettingsData = async () => {
	const fakeSettingsData = {
		theme: 'light',
		language: 'en',
		notifications: true
	};
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return fakeSettingsData;
};
