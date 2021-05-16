// not working
const Mybuild = require( "./../models/mybuildModel.js")

module.exports = {
	getAll: (req, res) => {
		Mybuild.find()
		.then((mybuilds) => res.json(mybuilds))
		.catch((err) => res.json(err))
	},
	getOne: (req, res) => {
		Mybuild.findById(req.params.id)
		.then((myb) => res.json(myb))
		.catch((err) => res.json(err))
	}
	
};