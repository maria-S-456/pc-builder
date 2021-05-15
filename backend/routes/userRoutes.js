const UserController = require("./../controllers/users.controller");

module.exports = (app) => {
	//app.post("/api/users", UserController.create);
	app.post("/api/users/register", UserController.register);
	app.post("/api/users/login", UserController.login);
	app.post("/api/users/logout", UserController.logout)
	app.get("/api/users", UserController.getAll);
	app.get("/api/users/:id", UserController.getOne);

	app.get("/api/users/checkemail", UserController.loginUser);
};