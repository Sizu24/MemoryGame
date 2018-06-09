// script file for Memory Game

// Global variables
var cardName;
var pickedCards = [];
var openCards = [];
var liSelector = $("li");
var iSelector = $("i");
var resetSelector = document.querySelector("#reset");

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

//reset button

resetGame();



function shuffleCards (){
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

  $(iSelector).each(function(card){
    $(this).addClass(gameBoard[card]);
  });

  $(liSelector).each(function(card){
    $(this).attr("id", iconNames[card]);
  });
}

function resetGame(){

  shuffleCards();

}

//reset button
resetSelector.addEventListener("click", function(){

  resetGame();

})


function removeCards(){

  $(liSelector).removeClass("flipped");
    pickedCards = [];
    openCards = [];

}

function checkCards(cards){

  if(cards[0] === cards[1]){

    $(pickedCards[0]).addClass("correct");
    $(pickedCards[1]).addClass("correct");
    removeCards();
    

  }else{

    console.log("try again");
    removeCards();

  }
}

$(liSelector).on("click", function(){

  if (openCards.length < 2) {

    pickedCards.push($(this).addClass("flipped"));
    cardName = $(this).attr("id");
    openCards.push(cardName);

    if(openCards.length === 2){
      checkCards(openCards);  
    }
  }
});

//click cards
//push cards to openCards
//check if match
//if match, keep cards open
//remove from openCards