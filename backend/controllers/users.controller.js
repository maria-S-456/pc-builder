
const User = require( "./../models/userModel.js")

module.exports = {
	getAll: (req, res) => {
		User.find()
		.then((users) => res.json(users))
		.catch((err) => res.json(err))
	},	
	getOne: (req, res) => {
		User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch((err) => res.json(err))
	},
	create: (req, res) => {
		console.log(req.body)
		User.create(req.body)
		.then((user) => res.json(user))
		.catch((err) => res.json(err))
	}
	
};