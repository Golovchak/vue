export function getScoreIn5Category(score) {
	let res
	if (score >= 10) res = 5
	else if (score >= 7) res = 4
	else if (score >= 4) res = 3
	else res = 2
	return res
};
export function getGradeLimits(grade) {
	let min, max
	switch (grade) {
		case 1: min = 10, max = 12
			break
		case 2: min = 7, max = 9
			break
		case 3: min = 4, max = 6
			break
		case 4: min = 1, max = 3
			break
		case 5: min = 13, max = 1000
			break
	}
	return { min: min, max: max }
}
