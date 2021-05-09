/*
import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Mybuild from '../models/mybuildModel.js';

// mybuild
router.get('/', asyncHandler(async(req, res) => {
	const mybuilds = await Mybuild.find({})
	res.json(mybuilds)
}))

router.get('/:id', asyncHandler(async (req, res) => {
	const mybuild = await Mybuild.findById(req.params.id)
		if(mybuild){
			res.json(mybuild);
		} else{
			res.status(404).json({message: 'Mybuild not found'})
		}
		
}))

export default router
*/