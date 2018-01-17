var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!")
});
// "/speak/pig" => "The pig says 'Oink'"
// "/speak/cow" => "The cow says 'Moo'"
// "/speak/dog" => "The dog says 'Woof'"
app.get("/speak/:animal", function(req, res) {
	var animals = {pig: "Oink", cow: "Moo", dog: "woof"};
	if (animals[req.params.animal] == null){
		res.send("Sorry, page not found...What are you doing with your life?");
	} else {
		res.send("The " + req.params.animal + " says '" + animals[req.params.animal] + "'");
	}
});
// "/repeat/hello/3" => "hello hello hello"
app.get("/repeat/:pat/:num", function(req, res) {
	var num = Number(req.params.num);
	var text = '';
	for (var i =0; i < num; i++) {
		text += req.params.pat + ' ';
	}
	res.send(text);
});

// route special parameters
app.get("/*", function(req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});


// Tell Express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started!!!");
});