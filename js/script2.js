// script file for Memory Game

// Global variables
var cardName;
var pickedCards = [];
var openCards = [];
var liSelector = $("li");
var iSelector = $("i");
var resetSelector = document.querySelector("#reset");
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneTurn;

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

init();

function init(){

  resetGame();

}

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
function playerToggle(){

  $("#player1").toggleClass("selected");
  $("#player2").toggleClass("selected");
  console.log(playerOneTurn = $("#player1").attr("class"));

}
function playerScores(){

  $("#score1").text(playerOneScore);
  $("#score2").text(playerTwoScore);

}
function resetGame(){

  shuffleCards();

}
function removeCards(){

  var flipBack = $(liSelector).removeClass("flipped");
  pickedCards = [];
  openCards = [];

}

function checkCards(cards){

  if(cards[0] === cards[1]){

    $("#message").text("Correct!");
    $(pickedCards[0]).addClass("correct");
    $(pickedCards[1]).addClass("correct");
    pickedCards = [];
    openCards = [];
    playerToggle();
    playerOneTurn === "selected" ? playerTwoScore++ : playerOneScore++;
    playerScores();

  }else{

    $("#message").text("Try Again");
    setTimeout(removeCards, 700);
    playerToggle();
  }
}

$(liSelector).on("click", function(){

  if (openCards.length < 2) {

    pickedCards.push($(this).addClass("flipped"));
    cardName = $(this).attr("id");
    openCards.push(cardName);
    $("#message").text("Choose another card");
    if(openCards.length === 2){
      checkCards(openCards);  
    }
  }
});

