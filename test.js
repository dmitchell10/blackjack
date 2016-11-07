


var Card = function (n,s) {
	number = n;
	suit = s;
//getting
	this.getNumber = function(){
		return this.number;
	};
	this.getSuit = function(){
		return this.suit;
	};
	this.getValue = function(){
		if(number === 11 || number === 12 || number === 13){
			return 10;
		}else if(number === 1){
			return 11;
		}else{
			return number;
		}
	};

}

// Deal function here. Return a new card with a suit
// random number from 1 to 4(suit), and a number that is a random
// number between 1 and 13(number) cards in each suit 
	
var deal = function(){
	var randNum = Math.floor(Math.random() * 13) + 1;
	var randSuit = Math.floor(Math.random() * 4) + 1;
//the card
	console.log(randNum, randSuit)
	return new Card(randNum, randSuit);
};

// deal takes two cards and sums the total 

var Hand = function(){

	this.card1 = deal();
	this.card2 = deal();
	this.card3 = deal();
	this.score = function (){
		return this.card1.getValue()+this.card2.getValue();
	};
};

//assigning the cards dealt to two players 

var myHand = new Hand();
var yourHand = new Hand();


//console.log("I scored a "+myHand.score()+" and you scored a "+
//yourHand.score());

console.log("Your score is currently " + yourHand.score());


function generateScore(value){
	return value + (Math.floor(Math.random() * 13) + 1)
}

function askForHit(currentScore, answer){
	if(answer === "hit") {
		return generateScore(currentScore);
	} else if (answer === "stand") {
		return answer;
	} else {
		return false;
	}
}

// If your cards are less than 21

var score = yourHand.score()
var dealer = myHand.score();

// Get results div
var resultNode = $('#result');
resultNode.text(score);

$(document).ready(function(){
	$("#buttonHit").on('click', function() {
		if (typeof score === "number" && score < 21) {
			score = askForHit(score, "hit");
			dealer = askForHit(dealer, "hit")
			checkIfContinue(score, dealer);
		}
	});
	$("#buttonStand").on('click', function() {
		if (typeof score === "number" && score <= 21) {
			score = askForHit(score, "stand")
			dealer = askForHit(dealer, "stand")
			checkIfContinue(score, dealer);
		}
	});
});

function checkIfContinue(score, dealer) {
	console.log(score, dealer);
	if (typeof score === "number" && score < 21) {
		console.log("keep going");
		// Set text of results div to score
		resultNode.text(score);
	} else if (score === 21) {
		console.log("blackjack");
		resultNode.text('blackjack');
	} else {
		console.log("You've gone bust")
		resultNode.text("You've gone bust");
	}
}


















