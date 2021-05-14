const User = require( "./../models/userModel.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {
	//register new user
	register: (req,res) => {
		const user = new User(req.body);
		user
			.save()	
			.then(() => {				
				res.json({message: "Successfully registered!", user:user})
			})
			.catch(err => res.status(400).json(err)) 
	},
	//login
	login: (req, res) => {
		//find the user! see if the email exists!
		User.findOne({email: req.body.email})
			.then((user) => {
				if(user === null){
					res.status(400).json({message: "Invalid Credentials!"})
				} else{
					// ok, email exists. does the provided password match what's in the db?
					bcrypt
					.compare(req.body.password, user.password)
					.then((passwordMatches) => {
							// issue the authentication token
							if(passwordMatches){
								//console.log("Credentials are valid!");
								res.cookie(
									"usertoken",
									jwt.sign({_id: user._id}, process.env.JWT_SECRET),
									{
										httpOnly: true
									}
									).json({ message: "Successfully Logged In"});
								} else {
									res.status(400).json({message: "Invalid Credentials!"});
							}
						})
						.catch(err =>{
							res.status(400).json({message: "Invalid Credentials!"})
						})
				}
			})
	},
	logout: (req, res) => {
		res.clearCookie("userToken");
		res.json({message: "You have successfully logged out!"})
	},

	getAll: (req, res) => {
		User.find()
		.then((users) => res.json(users))
		.catch((err) => res.json(err))
	},	
	getOne: (req, res) => {
		User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch((err) => res.json(err))
	}
/*
	create: (req, res) => {
		console.log(req.body)
		User.create(req.body)
		.then((user) => res.json(user))
		.catch((err) => res.json(err))
	}
	*/
	
};