require('dotenv').config();
const mongoose = require('mongoose');

const BD_USER = process.env.BD_USER;
const PASS = process.env.PASS;
const HOST = process.env.HOST;
const DB_NAME = process.env.DB_NAME;
const URL = `mongodb+srv://${BD_USER}:${PASS}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const koderSchema = new mongoose.Schema({
	nombre: String,
	genero: String,
	edad: Number,
});

const Koder = mongoose.model('Koder', koderSchema);

mongoose
	.connect(URL)
	.then(async (conection) => {
    console.log('Estamos conectados!');
    
    // const newKoder = new Koder({
      // 	nombre: 'Danny',
      // 	genero: 'masculino',
      // 	edad: 20,
      // });
      // await Koder.create(newKoder);
      // console.log("Koder creado");
      
      const Koders = await Koder.find({});
      console.log(Koders);
	})
	.catch((error) => {
		console.error('No se pudo conectar a la BD');
		console.error(error);
	});

