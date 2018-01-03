
var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtns.length; i++){
	console.log(modeBtns[i]);
	modeBtns[i].addEventListener("click", function() {
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") {
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		reset();
	})
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		} 
	}
	// Set background to back
	document.querySelector("h1").style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Color";
}


resetButton.addEventListener("click", function() {
	reset();
})


colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]; 
	squares[i].addEventListener("click", function() {
		 
		if (this.style.backgroundColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = "Play Again?"
			document.querySelector("h1").style.backgroundColor = pickedColor;
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = pickedColor;
			}
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = 'Try Again';
		}
	})
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// return a list of 6 colors with random rgb
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	// pick a "green" from 0 - 255
	// pick a "blue" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}