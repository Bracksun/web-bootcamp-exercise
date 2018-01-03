var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display"); 
var p2Display = document.querySelector("#p2Display"); 
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var maxScore = 5;

p1Button.addEventListener("click", function() {
	if(!gameOver){
		p1Score++;
		p1Display.textContent = p1Score;
		console.log(p1Score, maxScore);
		if (p1Score === maxScore) {
			gameOver = true;
			p1Display.classList.add('winner');
		}
	}
});


p2Button.addEventListener("click", function() {
	if(!gameOver){
		p2Score++;
		p2Display.textContent = p2Score;

		if (p2Score === maxScore) {
			gameOver = true;
			p2Display.classList.add('winner');		}
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
}
// 'change' event will be triggered when the 
// value is changed.
numInput.addEventListener("change", function(){
	maxScore = Number(this.value);
	winningScoreDisplay.textContent = maxScore; 
	reset();
})
