const UserController = require("./../controllers/users.controller");

module.exports = (app) => {
	app.get("/api/users", UserController.getAll);
	app.get("/api/users/:id", UserController.getOne);
	app.post("/api/users", UserController.create);
};