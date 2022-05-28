import { unlink, readFile, writeFile } from 'fs/promises';

async function crearArchivo(nombre, contenido) {
	try {
		await writeFile(nombre, contenido);
		console.log('archivo creado');
	} catch (error) {
		console.error('Error al crear el archivo');
	}
}

async function leerArchivo(nombre) {
	try {
		let data = await readFile(nombre, 'utf8');
		console.log(data);
	} catch (error) {
		console.error('No se puede leer el archivo');
		console.error(error);
	}
}

async function borrarArchivo(nombre) {
	try {
		await unlink(nombre);
		console.log(`El archivo ${nombre} fue eliminado`);
	} catch (error) {
		console.error('No se encontro el archivo');
		console.error(error);
	}
}

async function test(nombre, contenido) {
	await crearArchivo(nombre, contenido);
	await leerArchivo(nombre);
	await borrarArchivo(nombre);
}

test('Hola.txt', 'Este texto es el contenido del archivo 😁');
