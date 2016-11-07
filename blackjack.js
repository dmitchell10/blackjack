var hitPrompt = prompt("Would you like to stay?");
		switch(hitPrompt) {
			case "hit": 
				text = "The player has chosen to Hit!";
				break;
			case "stay":
				text = "Excellent choice sir";
				break;
			default:
				text = "Apologies sir, I'm having a little trouble"; 
		}; 

// var answer = prompt("Save data?");
// if(answer) {
// 	console.log("Well Done")
// } else {
// 	console.log("ok")
// }