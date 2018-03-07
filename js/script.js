
// Game board with 16 numbers. Rows 4 x 4
var gameBoard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


var cards = {
	cardNumber: 1,
	cardNumber: 2,
	cardNumber: 3,
	cardNumber: 4,
}

function shuffleCards (gameBoard){

	var newBoard = [];
	var num = 0;
	var randomCards;
	var storeNumber = 0;
	var boardLength = gameBoard.length;
	while (num < boardLength) {
	randomCards = Math.floor(Math.random() * 16);
	storeNumber = randomCards;
		if (randomCards !== storeNumber){
			newBoard.push(randomCards);
			console.log(newBoard);
			num++;
		}
	}
}



$(document).ready(function() {
    // all custom jQuery will go here

    $(".card").click(function(){
    	shuffleCards(gameBoard);
    	
;
    })

	});	

// shuffle numbers
// add numbers to list
// if number is same keep shuffling

// player picks card 1, flip card over
// player pics card 2, flip card over

// if card 1 === card 2, match === true

// if match === true, keep cards turned.
// if match === false, flip cards over.
