// script file for Memory Game

// Global variables
var cardName;
var pickedCards = [];
var openCards = [];
var liSelector = $("li");
var iSelector = $("i");
var resetSelector = document.querySelector("#reset");
var flipCardBack;
var cardPosition = [];
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneTurn;
var totalCards = 0;
var playerOneScoreDisplay;
var playerTwoScoreDisplay;
var minutes = 0.;
var seconds = 0;
var playerOneTries = 0;
var playerTwoTries = 0;
var starsPlayerOne = 3;
var starsPlayerTwo = 3;
var time;

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
  
  /*
    Initialize game. Starts timer when game loads
    Shuffles, and assigns card posistion and names.
  */

  gameTimer();
  shuffleCards();
  assignCards();

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

  /*
    After shuffle cards is complete, this function
    assigns the shuffled cards and matching icon names
    to i selector and li selector on HTML
  */

  $(iSelector).each(function(card){
    $(this).addClass(gameBoard[card]);
  });

  $(liSelector).each(function(card){
    $(this).attr("id", iconNames[card]);
  });

}

function gameTimer(){

  /*
    Starts a timer once the game starts.
    Creates the time display.
    Assigns text value of timer on main display to "time".
  */

  seconds++;
  if(seconds > 59){

    minutes++;
    seconds = 0;

  }
  if(seconds < 10){

    seconds = "0" + seconds;

  }

  $("#gameTimer").text(minutes + ":" + seconds);
  time = $("#gameTimer").text();

}

function starRating(){

  /*
    Reduces stars on the display if player reaches
    certain amount of tries. Also reduces star count
    variable that shows on win stats.
  */

  if(playerOneTries > 6 || playerTwoTries > 6){

    starsPlayerOne = 2;
    starsPlayerTwo = 2;
    $(".starsOne").html("&#9733; &#9733;");
    $(".starsTwo").html("&#9733; &#9733;");

    if(playerOneTries > 9 || playerTwoTries > 9){

      starsPlayerOne = 1;
      starsPlayerTwo = 1;
      $(".starsOne").html("&#9733;");
      $(".starsTwo").html("&#9733;");

    }

  }

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
    Assigns text value of score on screen
    for each player.
  */

  $("#score1").text(playerOneScore);
  $("#score2").text(playerTwoScore);
  playerOneScoreDisplay = $("#score1").text();
  playerTwoScoreDisplay = $("#score2").text();

}
function winnerAlert(){

  /*    
    Creates an alert after game is over, showing who won.
    Changes h1 color, and displays to show 
    winner and stats of game. Also asks players if
    they want to play again.
  */

  $("h1").addClass("winColor");

  $(".winAlert").html("<ul class='winMessage'>\
  <li class='whoWins'></li>\
  <li>Time: <span class='winTime'>0:00</span></li>\
  <li>Stars: <span class='starCount'></span></li>\
  <li>Moves: <span class='moveCounter'></span></li>\
  </ul>\
  <ul class='winMessage'>\
  <li>Play Again?</li>\
  <li><button class='playAgain'>Yes</button></li>\
  </ul>").css("display", "block");

  $(".playAgain").on("click", function(){
    
    location.reload();

  });

}
function winner(){

  /*  
    Checks if there is a winner. Displays
    in message box who winner is, or if game
    is a tie.
  */
  
  winnerAlert();
  clearInterval(timer);

  if(playerOneScoreDisplay === playerTwoScoreDisplay){

    $("#message, .whoWins").text("IT'S A TIE!!!");
    $(".winTime").text(time);


  }else if(playerOneScoreDisplay < playerTwoScoreDisplay){

    $("#message, .whoWins").text("PLAYER TWO WINS!!!");
    $(".winTime").text(time);
    $(".moveCounter").text(playerTwoTries);
    $(".starCount").text(starsPlayerTwo);
 
  }else{

    $("#message, .whoWins").text("PLAYER ONE WINS!!!");
    $(".winTime").text(time);
    $(".moveCounter").text(playerOneTries);
    $(".starCount").text(starsPlayerOne);

  }

}
function removeCards(){

  /*
    Removes flipped class to unflip cards.
    Clears pickedCards array
    Clears openCards array
    pickedCard holds detatils of position
    openCards holds name of icon
  */

  flipCardBack = $(liSelector).removeClass("flipped");
  pickedCards = [];
  openCards = [];
  $("#message").text("Choose a card");

}
function checkCards(cards){

  /*
    Checks if two picked cards match.
    Adds class "correct" to each card if they
    match which leaves card face open.
    Clears pickedCards and openCards arrays.
    Toggles turn to other player.
    Adds score to player who's turn it is
    Displays the scores.
  */

  if(cards[0] === cards[1]){

    $(pickedCards[0]).addClass("correct");
    $(pickedCards[1]).addClass("correct");
    pickedCards = [];
    openCards = [];
    playerToggle();
    playerOneTurn === "selected" ? playerTwoScore++ : playerOneScore++;
    playerOneTurn === "selected" ? playerTwoTries++ : playerOneTries++;
    starRating();
    playerScores();
    totalCards+= 2;
    totalCards === 16 ? winner(): $("#message").text("Correct!");

  }else{

    /*
      If cards don't match, displays Try Again message.
      Cards will show for 700ms before flipping back.
      Remove Cards function runs after 700ms.
      Toggles turn to other player.
    */

    $("#message").text("No Match!");
    setTimeout(removeCards, 700);
    playerToggle();
    playerOneTurn === "selected" ? playerTwoTries++ : playerOneTries++;
    starRating();

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
// card event listener
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
// reset button event listenter
$("#reset").on("click", function(){

    /*
      Reloads game when New Game button is pressed
    */

    location.reload();

});
//starts timer function
var timer = setInterval(gameTimer, 1000);
timer;
