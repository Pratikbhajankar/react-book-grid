const home = require('../controller/home');
module.exports = function(app){
	app.disable('etag');
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization, X-Request-With");
		res.header("Access-Control-Allow-Methods", "GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH");
		res.header("Access-Control-Allow-Credentials", "true");
		next();
	});
	app.route("/").get(home.home);
    app.get("/api/datacheck/:date",home.dataCheck);
}