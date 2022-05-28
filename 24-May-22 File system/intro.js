//#region teoría clase
const fs = require('fs');

// fs.writeFile('Hola.txt', 'Mi primer archivo', (err) => {
// 	if (err) {
// 		console.error('Algo salio mal', err);
// 	} else {
// 		console.log('Se creo el archivo 😀');
// 	}
// });

function callback(horror) {
	if (horror) {
		console.error('horror');
	} else {
		console.error('Se creo archivo con otro callback');
	}
}
//fs.writeFile('otro.txt', 'otro archivo 😃', callback);

//#endregion

function crearArchivo(nombre, contenido) {
	fs.writeFile(nombre, contenido, (err) => {
		if (err) {
			console.error('No se pudo crear el archivo', err);
		} else {
			console.log('Se creo el archivo ' + nombre);
		}
	});
}

function leerArchivo(name) {
	fs.readFile(name, 'utf8', (err, data) => {
		if (err) {
			console.error('No se puede leer, archivo no encontrado');
		} else {
			console.log('\nArchivo: ' + name);
			console.log('Contenido: ' + data);
		}
	});
}

function borrarArchivo(name) {
	fs.unlink(name, (err) => {
		if (err) {
			console.error('Error al eliminar archivo');
		} else {
			console.log('Archivo ' + name + ' eliminado');
		}
	});
}

crearArchivo('hola.txt', 'nuevo Archivo 😀');
crearArchivo('otroArchivo.txt', 'algo más aqui');
leerArchivo('hola.txt');
//borrarArchivo('hola.txt');
