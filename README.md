# Matching Game

### Game description

- 2 player game with 16 cards
- Timer on the right starts as soon as game starts
- Player one goes first, players take turns to pick two cards to see if they match
- If cards match, cards will stay open
- Star system starts off with 3 orange stars for each player
- Star reduces by 1 after 7 attempts, and reduces by one more after 10 attempts
- After all cards are matched, game shows winner or tie with game stats

### Included files

* index.html
* css folder - style.css
* js folder - script2.js
* jquery-3.3.1.min.js
* fontawesome-all.min.js

### Starting game

Open **index.html** in browser to run game. "**New Game**"" button will restart game.
Game requires jquery file and fontawesome file in same directory as index.html.

### Misc info about code

- To end game quickly for testing purposes, change **totalCards** variable in javascript file. A setting of **14** will end game with 1 matching pair.
These are the amount of cards that are open. 16 is required to end game.

- To show all card icons, in style.css file comment out:

```
.card svg {
  /*hides card icons*/
  display: none;

}
```
- Card event listener, reset button, and timer code is at the bottom of the javascript page

- Code for display at end of the game that shows winner/stats, is not in HTML file. This code is added with javascript with **winnerAlert** function