
// Game board with 16 numbers. Rows 4 x 4
var gameBoard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


var cards = {
	cardNumber: 1,
	cardNumber: 2,
	cardNumber: 3,
	cardNumber: 4,
}

function shuffleCards (gameBoard){

/*
	Shuffles cards. Takes in gameBoard parameter with deck of cards.
	Loops while current card is less than last card.
	Starts at first card, picks random index from rest of cards.
	swaps current card with random index card. Moves to next card
	and repeat swapping with current card until up to last card.

*/

	var currentCard = 0;
	var randomIndex;
	var cardsLeft = gameBoard.length - currentCard;
	var cardNumber

	while (currentCard < gameBoard.length){
		randomIndex = Math.floor(Math.random() * cardsLeft);
		cardNumber = gameBoard[currentCard];
		gameBoard[currentCard] = gameBoard[randomIndex];
		gameBoard[randomIndex] = cardNumber;
		currentCard++;

	}
	console.log(gameBoard);	
}


// jQuery function to test function by clicking squares
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
