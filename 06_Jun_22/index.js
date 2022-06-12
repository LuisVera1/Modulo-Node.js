 require("dotenv").config(); // las variables del .env se agregan a process.env

// Importamos paquetes con require
const express = require("express");
const mongoose = require("mongoose");

const koder = require("./models/koder.model");

// Inicializamos constantes con la configuracion
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

//const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const URL = "mongodb+srv://Luisvera:PassUser23.@cluster0.hsqgk.mongodb.net/kodemia?retryWrites=true&w=majority"

const app = express();

// Ejecutamos server y conectamos BD
// mongoose.connect(URL)
//   .then(() => {
//     console.log("Estamos conectados a la BD!");

//     app.listen(PORT, () => {
//       console.log("Server ejecutandose en el puerto:", PORT);
//     });
//   })
//   .catch((error) => {
//     console.error("Hubo un error:", error);
//   }); 


//   app.get("/koders", async (req, res) => {
//     const koders = await koder.find({});
//     console.log(koders);
//     res.json(koders);
//   });

console.log("Se intentara conectar....");
conectarxfa();

async function conectarxfa() {
  await mongoose.connect(URL);
  console.log("conectado");
  reading();
}

async function reading() {
  console.log("Leyendo....");
  const Koders = await koder.find();
  console.log(Koders);
};


