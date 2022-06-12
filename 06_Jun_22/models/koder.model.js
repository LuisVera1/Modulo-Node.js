  const mongoose = require('mongoose');
  const { Schema, model } = mongoose;

const koderSchema = new Schema({
	nombre: String,
	genero: String,
	edad: Number
});

const Koder = model('koders', koderSchema);

//Exportamos el modelo de Koder
module.exports = Koder;


