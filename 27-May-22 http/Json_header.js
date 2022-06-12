const http = require('http');

// Crear servidor
const server = http.createServer((request, response) => {
  let dir = request.url;
  let obj = {};

  if(dir != "/"){
    let property = dir.slice(1,dir.length);
    obj[property] = "Hola Mundo!"
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Content-Language", "es-MX")
    console.log(obj)
  }
	response.end(JSON.stringify(obj));
});

// Se pone al servidor a escuchar un puerto
server.listen(8000, () => {
	console.log('Servidor iniciado');
});