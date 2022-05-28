const promesa = new Promise((resolve, reject) => {
	resolve({
		hola: 'mundo',
		test: true,
	});
});

// promesa.then((unValor) =>{
//   console.log("Resultado", unValor);
// });

// const promesa2 = new Promise((resolve, reject) =>{
//   // resolve("exito")
//   reject("Todo salio mal");
// });

// promesa2
//   .then ((unValor) =>{
//     console.log("Resultado:",unValor);
//   })
//   .catch((unError) =>{
//     console.log("El error es: ",unError);
//   })

function retirarDinero(cantidad) {
	return new Promise((resolve, reject) => {
		console.log('procesando su peticion');
		console.log(`La cantidad a retirar es ${cantidad}`);

		if (cantidad < 100) {
			reject('Solo puedo darte mas de $100');
		}
		resolve('$', cantidad, '.00');
	});
}

const promesadinero = retirarDinero(50);
promesadinero
	.then((dinero) => {
		console.log('El cajero dio: ', dinero);
	})
	.catch((error) => {
		console.error('El cajero fallo, el error es ', error);
	});
