const http = require('http');

// Crear servidor
const server = http.createServer((request, response) => {
  let url = request.url;
  let method = request.method;

  if (method === "GET" && url === "/hola"){
    response.write("pagina encontrada");
  } else {
    response.statusCode = 404;
    response.write("Ruta no encontrada");
  }
	response.end();
});

// Se pone al servidor a escuchar un puerto
server.listen(8000, () => {
	console.log('Servidor iniciado en el puerto 8000');
});