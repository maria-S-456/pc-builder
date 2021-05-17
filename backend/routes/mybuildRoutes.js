const MybuildController = require("./../controllers/mybuilds.controller");

module.exports = (app) => {	
	app.get("/api/mybuild/:id", MybuildController.getOne);
	app.get("/api/mybuilds", MybuildController.getAll);
	app.put("/api/mybuilds/:id", MybuildController.update);
};