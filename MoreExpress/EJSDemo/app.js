var express = require("express");
var app = express();

// Let express to link public dir
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	// pass the value to ejs
	res.render("love", {thingVar: req.params.thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Charlie"},
		{title: "Can you believe this pomsky?", author: "Colt"}
	];

	res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server is listening");
});