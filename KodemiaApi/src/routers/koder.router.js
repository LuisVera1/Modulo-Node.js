const express = require("express");
const Koder = require("../usecases/koder.usecase");

const router = express.Router();

router.get('/', async (req, res) => {
	let queryF = {};
	if (req.query.edad) {
		queryF.edad = req.query.edad;
	}

	if (req.query.genero) {
		queryF.genero = req.query.genero;
	}

	const koders = await Koder.getKoders(queryF);
	res.json(koders);
});

router.post('/', async (req, res) => {
	const newKoder = req.body;

	const addKoder = new Koder(newKoder);

	await Koder.createKoder(newKoder);
	console.log('Registro creado');

	//const koders = await Koder.find();
	res.status(201);
	res.json(koders);
});

router.patch("/:id", async (req,res)=>{
  //   ...koder/234233456456 <- ID
  const id = req.params.id;
  const koderinfo = req.body;
  const updatedKoder = await Koder.updateKoder(id,koderinfo)

  res.json(updatedKoder)
});


router.delete("/:id", async (req,res) =>{
  const id = req.params.id;
  await Koder.deleteKoder(id);
	res.status(202);
	res.json("Koder eliminado")
})



module.exports = router;
