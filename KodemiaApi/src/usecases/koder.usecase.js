const Koder = require('../models/koder.model');

async function getKoders(filter) {
	const koders = await Koder.find(filter);
	return koders;
}

async function createKoder(koder) {
	const newKoder = new Koder(koder);
	await Koder.create(newKoder);
	return newKoder;
}

async function updateKoder(id, koder) {
	const filter = {
		_id: id,
	};

	await Koder.findOneAndUpdate(filter, koder);

	const update = Koder.findOne(filter);

	return update;
}

async function deleteKoder(id) {
	const KoderToDelete = {
		_id: id,
	};

	await Koder.findByIdAndDelete(KoderToDelete);
}

module.exports = { getKoders, createKoder, updateKoder, deleteKoder };
