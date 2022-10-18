
export function queryStringify(data: Record<string, any>) {
	if (Object.keys(data).length === 0) {
		return '';
	}

	let queryStringArr = [];

	for (let key in data) {
		if (data[key] instanceof Array) {
			const currentValue = data[key].join(',');

			queryStringArr.push(`${key}=${currentValue}`);
		} else {
			queryStringArr.push(`${key}=${data[key]}`);
		}
	}

	const queryString = queryStringArr.join('&');

	return `?${queryString}`;
}
