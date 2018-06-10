// script file for Memory Game

// Global variables
var cardName;
var pickedCards = [];
var openCards = [];
var liSelector = $("li");
var iSelector = $("i");
var resetSelector = document.querySelector("#reset");
var cardPosition = [];
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneTurn;
var win = playerOneScore + playerTwoScore;

// Font Awesome config
FontAwesomeConfig = { autoReplaceSvg: 'false' }

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

  shuffleCards();
  assignCards();
  chooseCard();
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
}
function assignCards(){

  $(iSelector).each(function(card){
    $(this).addClass(gameBoard[card]);
  });

  $(liSelector).each(function(card){
    $(this).attr("id", iconNames[card]);
  });

}
function playerToggle(){
  /*
    Toggles class "selected" between player 1 id
    and player 2 id to pick who's turn it is.
    Assigns class name to playerOneTurn to use in 
    function to see who's turn it is.
  */
  $("#player1").toggleClass("selected");
  $("#player2").toggleClass("selected");
  playerOneTurn = $("#player1").attr("class");

}
function playerScores(){

  /*
    Takes score from varibles and
    isplays them on main screen.
  */

  $("#score1").text(playerOneScore);
  $("#score2").text(playerTwoScore);

}
function winner(){

    if(playerOneScore > playerTwoScore){

      $("#message").text("PLAYER ONE WINS!!!")

    }else if(playerOneScore < playerTwoScore){

      $("#message").text("PLAYER TWO WINS!!!")

    }else{

      $("#message").text("IT'S A TIE!!!")

    }

}
$("#reset").on("click", function(){

    resetGame;
});

function resetGame(){

  shuffleCards();
  assignCards();

}
function removeCards(){

  /*
    Removes flipped class to unflip cards.
    Empties pickedCards array
    Empteis openCards array
    pickedCard holds detatils of position
    openCards holds name of icon
  */

  var flipBack = $(liSelector).removeClass("flipped");
  pickedCards = [];
  openCards = [];

}
function checkCards(cards){

  /*
    Checks if two picked cards match.
    Adds class "correct" to each card if they
    match which leaves card face open.
    Empties pickedCards and openCards arrays.
    Toggles turn to other player.
    Adds score to player who's turn it is
    Displays the scores.
    Checks if there is a winner.
  */

  if(cards[0] === cards[1]){

    $("#message").text("Correct!");
    $(pickedCards[0]).addClass("correct");
    $(pickedCards[1]).addClass("correct");
    pickedCards = [];
    openCards = [];
    playerToggle();
    playerOneTurn === "selected" ? playerTwoScore++ : playerOneScore++;
    playerScores();
    win === 8 ? winner(): chooseCard();

  }else{

    /*
      If cards don't match, displays Try Again message.
      Cards will show for 700ms before flipping back.
      Remove Cards function runs after 700ms.
      Toggles turn to other player.
    */

    $("#message").text("Try Again");
    setTimeout(removeCards, 700);
    playerToggle();

  }  
}//end of checkCards function
function checkSame(){

  /*
    Checks to see if same card was clicked twice. If so,
    takes second card off openCards list and pickedCards
    list to let user choose a different card.


  */
  if(cardPosition[0] === cardPosition[1]){

    console.log("SAME");
    cardPosition.splice(1, 1);
    pickedCards.splice(1, 1);
    openCards.splice(1, 1);
    

  }else{

    cardPosition = [];
    checkCards(openCards);

  }

}
function chooseCard(){
  $("#message").text("Choose a card");

  $(liSelector).on("click", function(){

    /*
      Click listener to see if card is clicked.
      Pushes clicked cards to empty array pickedCards.
      Picked Cards holds value of position of card.
      Takes ID of clicked card and assigns to cardName
      That ID holds name of icon which gets added to openCards
      array. Shows message to choose another card after first
      click. When two cards are in the openCards array,
      runs checkCards function to compare cards.
    */

    if (openCards.length < 2) {

      pickedCards.push($(this).addClass("flipped"));
      cardPosition.push($(this).attr("class"));
      cardName = $(this).attr("id");
      openCards.push(cardName);
      $("#message").text("Choose another card");
      if(openCards.length === 2){
        checkSame();  
      }
    }
  });
}