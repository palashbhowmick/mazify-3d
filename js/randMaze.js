export function randomGeneration() {
	let initialArr = new Array(18 * 18).fill(1);

	function getArrVoisinDindex(index) {
		let arrVoisin = [];
		if ((index - 1) % 18 != 17) {
			arrVoisin.push(index - 1);
		}
		if ((index + 1) % 18 != 0) {
			arrVoisin.push(index + 1);
		}
		arrVoisin.push(index - 18);
		arrVoisin.push(index + 18);
		// only keep acceptable values
		return arrVoisin.filter(value => value >= 0 && value < initialArr.length);;
	}

	function nbVoisinVide(index) {
		return getArrVoisinDindex(index).filter(val => initialArr[val] == 0).length;
	}

	const indexStart = Math.floor(Math.random() * initialArr.length) + 1;
	initialArr[indexStart] = 0;
	let arrVoisin, indexFin, arrBifurc = [indexStart];

	while (arrBifurc.length != 0) {

		arrVoisin = getArrVoisinDindex(arrBifurc.pop());

		while (arrVoisin.length != 0) {

			const nombreRandom = Math.floor(Math.random() * arrVoisin.length);
			let voisinIndex = arrVoisin[nombreRandom];

			if (nbVoisinVide(voisinIndex) <= 1) {
				initialArr[voisinIndex] = 0;
				arrBifurc.push(voisinIndex);
				arrVoisin = getArrVoisinDindex(voisinIndex);
			} else {
				arrVoisin = arrVoisin.filter(item => item !== voisinIndex);
			}
		}

		if (indexFin === undefined)
			indexFin = arrBifurc[arrBifurc.length - 1];
	}

	initialArr[indexStart] = "s";
	initialArr[indexFin] = "f";

	for (let k = 0; k < 18; ++k) {
		const index = k * 18 + k * 2;
		initialArr.splice(index, 0, 1);
		initialArr.splice(index + 19, 0, 1);
	}
	for (let i = 0; i < 20; ++i) {
		initialArr.unshift(1);
		initialArr.push(1);
	}

	return initialArr;
}