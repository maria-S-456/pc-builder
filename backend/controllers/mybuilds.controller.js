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
		.then((mybuild) => res.json(mybuild))
		.catch((err) => res.json(err))
	},
	update: (req, res) => {
		Mybuild.findByIdAndUpdate(req.params.id, req.body, {new: true})
		.then((mybuilds) => res.json(mybuilds))
		.catch((err) => res.json(err));
	}
	
};