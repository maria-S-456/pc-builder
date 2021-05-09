
const Product = require( "./../models/productModel.js")

module.exports = {
	getAll: (req, res) => {
		Product.find()
		.then((products) => res.json(products))
		.catch((err) => res.json(err))
	},	
	getOne: (req, res) => {
		Product.findById(req.params.id)
		.then((product) => res.json(product))
		.catch((err) => res.json(err))
	},
	create: (req, res) => {
		console.log(req.body)
		Product.create(req.body)
		.then((product) => res.json(product))
		.catch((err) => res.json(err))
	}
	
};