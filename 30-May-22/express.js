//#region class
/* const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
}); 


const express = require("express");
const server = express();
let resp = "";

server.get("/koder", (request, response) => {
  resp = {mensaje: "Aqui estan todos los koders!"};   //response.send
  response.json(resp);
});

server.post("/koder", (request, response) => {
  resp = {mensaje: "Aqui puedes crear koders!"};
  response.json(resp);
});

server.put("/koder", (request, response) => {
  resp = {mensaje: "Aqui puedes sustituir un koder!"};
  response.json(resp);
});

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
}); */
//#endregion

const express = require('express');
const server = express();
const fs = require('fs/promises');

//* middleware request -> JSON
server.use(express.json());

const FILE = 'Koders.json';
const ENCODING = 'utf8';

server.get('/koder', async (req, res) => {
	const koders = await readFile();
	res.json(koders);
});

server.post('/koder', async (req, res) => {
	const newKoder = req.body;
	//Read file
	const koders = await readFile();

	//add item
	koders.push(newKoder);

	//write file
	writeFile(koders);

	//send response
	res.status(201);
	res.json(koders);
});

server.patch('/koder/:name', async (req, res) => {
	const name = req.params.name;
	const koders = await readFile();
	const body = req.body;
	let change = false;

	for (koder of koders) {
		if (koder.nombre == name && koder.nombre == body.nombre) {
			koder.edad = body.edad;
			koder.genero = body.genero;
			change = true;
		}
	}

	if(change){
		writeFile(koders);
		res.status(202);
		res.json(koders)
	} else{
		res.status(400);
		res.json({})
	}
});

async function readFile() {
	const archivo = await fs.readFile(FILE, ENCODING);
	const objeto = JSON.parse(archivo);
	const koders = objeto.koders;
	return koders;
}

async function writeFile(koders) {
	const newFile = JSON.stringify({ koders }, null, 2);
	await fs.writeFile(FILE, newFile, ENCODING);
}

server.listen(8000, () => {
	console.log('Servidor ejecutandose');
});


//01-Jun-22 00:37:27