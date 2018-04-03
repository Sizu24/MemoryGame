// script file for Memory Game

// Global variables
var clickOne = 2;
var cardNameOne;
var cardNameTwo;
var twoCards = [];
// pick elements, list items
var listClass = $("ul").children();
// icon class names
var iconClass = listClass.find("i");

// Font Awesome code to next class names within <i>
FontAwesomeConfig = { autoReplaceSvg: 'nest' }

// 16 icon names for each card on gameBoard
gameBoard = ["fab fa-playstation",
"fas fa-arrow-circle-left",
"fab fa-apple",
"fas fa-football-ball",
"far fa-heart",
"fab fa-fort-awesome-alt",
"fas fa-coffee",
"fas fa-basketball-ball",
"fas fa-football-ball",
"fas fa-arrow-circle-left",
"fab fa-fort-awesome-alt",
"fab fa-playstation",
"fab fa-apple",
"far fa-heart",
"fas fa-basketball-ball",
"fas fa-coffee"];

iconNames = ["playstation",
"arrow",
"apple",
"football",
"heart",
"fort",
"coffee",
"basketball",
"football",
"arrow",
"fort",
"playstation",
"apple",
"heart",
"basketball",
"coffee"];

myvar = [];

// do this every new game
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
	var cardNumber;
	var iconNumber;

	while (currentCard < gameBoard.length){
		randomIndex = Math.floor(Math.random() * cardsLeft);
		cardNumber = gameBoard[currentCard];
		iconNumber = iconNames[currentCard];
		gameBoard[currentCard] = gameBoard[randomIndex];
		iconNames[currentCard] = iconNames[randomIndex];
		gameBoard[randomIndex] = cardNumber;
		iconNames[randomIndex] = iconNumber;
		currentCard++;
	}

}

// jQuery section
//$(document).ready(function() {

    // Click card function. All action happens when card clicked
//    $(".card").click(function clickCard(){

   	
    	// flip first card

$(listClass).click(function pickCardOne(){

   	/*
		On click of second card, flips the card around and displays icon.			clickTwo equals 1 before click of card, an reduces to 0 after click.
		After card is clicked, adds class "flipped" to HTML file next to li.
		Assigns the file name of icon to cardNameTwo.
		Adds file name of icon to end of list "twoCards".
   	*/

	var cardPickOne;

   	if (clickOne > 0) {
  	// add "flipped" class to card that is clicked
  	cardPickOne = $(this).addClass("flipped");
  	// assign icon name of card to cardNameTwo
   	//cardNameOne = cardPickOne.find("svg, id");
    cardNameOne = $(this).attr("id");
    twoCards.push(cardNameOne);
   	console.log(twoCards[0] === twoCards[1]);
   	//twoCards.push(cardNameOne);	
   	clickOne--;
   	}
});
   	
//   	}


//   	}
		

    // close bracket for clickCard function
//	});	


// close bracket for document ready function
//})


// shuffle cards
shuffleCards(gameBoard);
// change class names in icon list on HTML file to shuffled gameBoard names
$(iconClass).each(function(index){
	$(this).attr("class", gameBoard[index]);
});

$(listClass).each(function(index){

	$(this).attr("id", iconNames[index]);

});
	


/*
$(".gameboard").click(function () {

	console.log(twoCards);

})
*/

