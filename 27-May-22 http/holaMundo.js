const http = require('http');

// Crear servidor
const server = http.createServer((request, response) => {
  let dir = request.url;
  //console.log("URL: ", dir);
  // console.log("Método: ",request.method)

  if(dir == "/koder"){
    response.write("Aqui hay un solo Koder");
  } else if (dir == "/koders"){
    response.write("Aqui estan todos los Koders");
  } else{
    response.write("No se que hacer :O, aiuda!");
  }
	response.end();
});

// Se pone al servidor a escuchar un puerto
server.listen(8000, () => {
	console.log('Servidor iniciado en el puerto 8000');
});