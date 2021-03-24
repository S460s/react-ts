function getData(key: string) {
	const data: string | null = localStorage.getItem(key);
	const objects = JSON.parse(data!);
	return objects;
}

function populateStorage<Type>(data: Type, key: string) {
	localStorage.setItem(key, JSON.stringify(data));
}

function checkStorage(key: string) {
	if (!localStorage.getItem(key)) {
		return false;
	} else {
		return true;
	}
}

export { getData, populateStorage, checkStorage };
