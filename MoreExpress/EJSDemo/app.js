var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	// pass the value to ejs
	res.render("love.ejs", {thingVar: req.params.thing});
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server is listening");
});