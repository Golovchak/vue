export function extractFilterParams(carsList, title) {
	let res = [null]
	// Спочатку робив без res[0]=[null],
	//  але так легше тестити додаток і працюж коректніше (окрім чекбоксу)
	// let res = []
	carsList.forEach(car => {
		if (!res.includes(car[title])) res.push(car[title])
	});
	return res
}