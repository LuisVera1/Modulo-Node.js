let arreglo = [1, 9, 3, 4, 5];

function find(array, callback, value) {
	let res = false;
	for (let i = 0; i < array.length; i++) {
		res = callback(array[i], value);
		if (res) {
			break;
		}
	}
	return res;
}

function compare(value, valueToCompare) {
	if (valueToCompare === value) {
		//console.log(valueToCompare)
		//console.log(value)
		return true;
	} else {
		return false;
	}
}

//Buscar el numero 2 dentro del arreglo
let searchValue = find(arreglo, compare, 2);
console.log(searchValue);
