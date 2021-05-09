const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	partType: {
		type: String,
		required: true
	}
}, {
	timestamps: true
}, {collection: 'products'})

const Product = mongoose.model("products", productSchema)
module.exports = Product