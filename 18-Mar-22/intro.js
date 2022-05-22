//Declaración de la función
function saludar(nombre) {
	return `Hola ${nombre}, saludos!`;
}

//Se invoca la función
let saludo = saludar('Luis');
//console.log(saludo);


// - - - Ejercicio # 1 - - -
console.log('\n- - - Ejercicio # 1 - - -  ');
let numArr = [1, 3, 4, 5, 2];

function numMax(arr) {
	let compare = arr[0];
	arr.forEach((number) => {
		if (number > compare) {
			compare = number;
		}
	});
	return compare;
}
console.log(numMax(numArr));


// - - - Ejercicio # 2 - - -
console.log('\n- - - Ejercicio # 2 - - -  ');
let word = 'leon';

function flip(string) {
	let res = '';
	for (letter of word) {
		res = letter + res;
	}
	console.log(res);
}
flip(word);


// - - - Ejercicio # 3 - - -
console.log('\n- - - Ejercicio # 3 - - -  ');
function divideAB(a, b) {
	if (b != 0) {
		return a / b;
	} else {
		return 'Error';
	}
}
console.log(divideAB(10, 2));
console.log(divideAB(6, 0));
