var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi there!")
});
// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
	res.send("Goodbye!!");
});
// "/dog" => "MEOW"
app.get("/dog", function(req, res) {
	res.send("MEOW");
});

// route special parameters
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	console.log(req.params);
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREGISTER");
});


// Tell Express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started!!!");
});