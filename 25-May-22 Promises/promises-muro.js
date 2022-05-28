let muro = {
  construido: false,
  aplanado: false,
  pintado: false,
}

function construirMuro(muro) {
  console.log("construyendo muro...");
  return new Promise((resolve, reject)=> {
    muro.construido = true;
    if(muro.construido != true){
      reject(new Error("No se puede construir el muro"))
    }
    resolve(muro);
  });
}

function aplanarMuro(muro) {
  console.log("aplanar muro...");
  return new Promise((resolve, reject)=> {
    muro.aplanado = true;
    resolve(muro)
  })
}

function pintarMuro(muro) {
  console.log("pintar muro...");
  return new Promise((resolve, reject)=> {
    muro.pintado = true;
    resolve(muro)
  })
}

/* const promConstruir = construirMuro(muro);
promConstruir
.then((muroConstruido) => {
  console.log("primer then", muroConstruido)
  return aplanarMuro(muro)
})
.then ((muroAplanado) =>{
  console.log("segundo then", muroAplanado);
  return pintarMuro(muro)
})
.then ((muroPintado) =>{
  console.log("tercer then", muroPintado);
})
.catch ((error) =>{
  console.log("Hubo un error",error);
}) */

async function construirEnOrden() {
  try{
    await construirMuro(muro);
    await aplanarMuro(muro);
    await pintarMuro(muro);
    console.log(muro);
  } catch {
    console.log("Algo fallo, pero el programa sigue vivo");
  }
}
construirEnOrden();