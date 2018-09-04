export default (url, options) => {
	return fetch(url)
		.then(res => res.json())
		.then(rj => rj.data)
}