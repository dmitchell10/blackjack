





// two players closest to 21 - Done 
// for player two offer promt hold or hit - Done 
// conditional for dealer, if higher than or equal to 17 then stay 
// second player alternates with first player 
// Front end


//var hitPrompt = prompt("Would you like to stay?");
/*switch(hitPrompt) {
	case "hit": 
		text = "The player has chosen to Hit!";
		console.log("Hello");
		break;
	case "stay":
		text = "Excellent choice sir";
		break;
	default:
		text = "Apologies sir, I'm having a little trouble"; 
}; */




// var answer = prompt("Save data?");
// if(answer) {
// 	console.log("Well Done")
// } else {
// 	console.log("ok")
// }



var pack = [
	{
		suit: 'Clubs',
		value: 10,
		special: 'Queen'
	},
	{
		suit: 'Hearts',
		value: 4,
		special: null
	}
];



var Card = function (n,s) {
	var number = n;
	var suit = s;
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


// If your cards are less than 21

if(yourHand.score() < 21) {
	var answer = prompt("Would you like to hit?")
		if(answer === "hit") {
			var hitOnce = yourHand.score() + (Math.floor(Math.random() * 13) + 1)
			console.log(hitOnce);
			if (hitOnce < 21) {
				var answer = prompt("Would you like to hit?")
				if (answer === "hit") {
					var hitTwice = hitOnce + (Math.floor(Math.random() * 13) + 1)
					console.log(hitTwice);
					if (hitTwice < 21) {
						var answer = prompt("Would you like to hit?")
						if (answer === "hit") {
							var hitThrice = hitTwice + (Math.floor(Math.random() * 13) + 1)
							console.log(hitThrice);
							if (hitThrice < 21) {
								var hitFour = hitThrice + (Math.floor(Math.random() * 13) + 1)
								console.log(hitFour)
							} else if (hitThrice === 21) {
								console.log("blackjack");
								alert("blackjack")
							} else {
								console.log("You've gone bust")
								alert("bust");
							}
						}
					} else if (hitTwice === 21) {
						alert("Blackjack");
						console.log("You've got Blackjack you win");
					} else {
						//more than 21 
						console.log("You've gone bust");
					};
				};

				
			} else if (hitOnce === 21) {
				alert("Blackjack");
				console.log("You've got Blackjack");
			} else {
				//more than 21 
				console.log("You've gone bust")

			};






			alert("This is you new score");
		} else {
			console.log("Dealer scores a "+myHand.score()+" and you scored a "+ yourHand.score());
			if(yourHand.score() > myHand.score())
			console.log("Congratulations, you win!");
			else if(yourHand.score() < myHand.score())
			console.log("I win!");
			else
			console.log("We tied!");
		}

} else if (yourHand.score() === 21) {
	console.log(yourHand.score());
	alert("Blackjack, you lucky bugger")
}

