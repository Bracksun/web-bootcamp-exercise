var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	// pass the value to ejs
	res.render("love.ejs", {thingVar: req.params.thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Charlie"},
		{title: "Can you believe this pomsky?", author: "Colt"}
	];

	res.render("posts.ejs", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server is listening");
});