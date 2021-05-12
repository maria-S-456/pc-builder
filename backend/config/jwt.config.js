const jwt = require('jsonwebtoken');

module.exports = {
	authenticate(req, res, next){
		jwt.verify(req.cookies.usertoken, process.env.JWT_SECRET,
			(err, payload) => {
				if(err) {
					// respond with 401 error code
					res.status(401).json({verified: false})
				} else{
					next();
				}
			})
	}
}