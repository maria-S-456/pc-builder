/*
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Product = '../models/productModel.js';
const Mybuild = '../models/mybuildModel.js';

// Product
router.get('/products', asyncHandler(async(req, res) => {
	const products = await Product.find({})
	res.json(products);
}))

router.get('/products/:id', asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)
		if(product){
			res.json(product);
		} else{
			res.status(404).json({message: 'Product not found'})
		}
		
}))
router.post('/products', asyncHandler(async(req, res) =>{
	//console.log(res.data)
}))

// Mybuild
router.get('/mybuild', asyncHandler(async(req, res) => {
	const mybuilds = await Mybuild.find({})
	res.json(mybuilds)
}))

router.get('/mybuild/:id', asyncHandler(async (req, res) => {
	const mybuild = await Mybuild.findById(req.params.id)
		if(mybuild){
			res.json(mybuild);
		} else{
			res.status(404).json({message: 'Mybuild not found'})
		}
		
}))
module.exports = router

*/

const ProductController = require("./../controllers/products.controller");

module.exports = (app) => {
	app.get("/api/products", ProductController.getAll);
	app.get("/api/products/:id", ProductController.getOne);
	app.post("/api/products", ProductController.create);
};