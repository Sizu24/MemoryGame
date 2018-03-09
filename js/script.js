// script file for Memory Game
// 16 icons for each card on gameBoard

// Font Awesome code to next class names within <i>
FontAwesomeConfig = { autoReplaceSvg: 'nest' }

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
	var cardNumber

	while (currentCard < gameBoard.length){
		randomIndex = Math.floor(Math.random() * cardsLeft);
		cardNumber = gameBoard[currentCard];
		gameBoard[currentCard] = gameBoard[randomIndex];
		gameBoard[randomIndex] = cardNumber;
		currentCard++;
	}

}


 // jQuery section
$(document).ready(function() {

    // pick elements, list items
  	var listClass = $("ul").children();
  	// icon class names
  	var iconClass = listClass.find("i");

  	var newDeck;
    // Click test function
    $(".card").click(function clickCard(){
    	shuffleCards(gameBoard);

    // change class names on icon list in HTML to shuffled array
		$(iconClass).each(function(index){

    		$(this).attr("class", gameBoard[index]);
    		
    	})
    		
		// console test
    	console.log(listClass);
 	

	});	
 		
   	
})
