// script file for Memory Game

// Global variables
var win = false;
var clicksRemaining = 2;
var cardId;
var twoCards = [];
var openCardNames = [];
var correctCards = [];
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

function checkWin(){

	if(correctCards.length===16){

		console.log("You win!");
		win = true;
		return win;

	}else{

		return win;
	}

};

function removeCards(){

	twoCards.splice(0, 2);
	openCardNames.splice(0, 2);

};

function cardsMatch(){

			var idNameOne = document.getElementById(twoCards[0]);
   			var idNameTwo = document.getElementById(twoCards[1]);

	if(twoCards.length === 2){

   		if(twoCards[0] === twoCards[1]){
   			
   			console.log("match!");
   			clicksRemaining = 2;
   			$(openCardNames[0]).addClass("correct");
   			$(openCardNames[1]).addClass("correct");
   			correctCards.push(openCardNames[0], openCardNames[1]);
   			console.log(correctCards);
   			removeCards();
   		
   		}else{

   			console.log("try again");
   			// flip cards back after 2 seconds
   			setTimeout(function(){

   				$(listClass).removeClass("flipped");

   			}, 1000);
   			
   			clicksRemaining = 2;
   			removeCards();
   		}
   	}


};

// flip cards
$(listClass).click(function pickCardOne(){

   	/*
		On click of second card, flips the card around and displays icon.			clickTwo equals 1 before click of card, an reduces to 0 after click.
		After card is clicked, adds class "flipped" to HTML file next to li.
		Assigns the file name of icon to cardNameTwo.
		Adds file name of icon to end of list "twoCardhttps://www.udacity.com/course/data-scientist-nanodegree--nd025s".
   	*/

	var cardFullName;

   	if (clicksRemaining > 0 && win === false) {
  	// add "flipped" class to card that is clicked
  	//cardPickOne = $(this).addClass("flipped");
  	// assign icon name of card to cardNameTwo
   	//cardNameOne = cardPickOne.find("svg, id");
    	cardId = $(this).addClass("flipped").attr("id");
    	cardFullName = $(this);
    	openCardNames.push(cardFullName);
    	twoCards.push(cardId);
   		clicksRemaining--;
   		cardsMatch();
   		checkWin();
   	};
   
});

// shuffle cards
shuffleCards(gameBoard);
// change class names in icon list on HTML file to shuffled gameBoard names
$(iconClass).each(function(index){
	$(this).attr("class", gameBoard[index]);
});

$(listClass).each(function(index){

	$(this).attr("id", iconNames[index]);

});
	

