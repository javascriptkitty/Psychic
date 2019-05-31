// Guess what letter I'm thinking of

var wins = 0;
var losses = 0;
var guesses;
var usersWins;
var usersLosses;
var usersGuesses;
var usersText;
var compText;

var letter = [];
for (i = 97; i <= 122; i++) {
  var str = String.fromCharCode(i);
  letter.push(str);
}
function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function resetGame() {
  usersWins = document.getElementById("wins");
  usersWins.innerHTML = wins;
  usersLosses = document.getElementById("losses");
  usersLosses.innerHTML = losses;
  guesses = 9;
  usersGuesses = document.getElementById("guesses");
  usersGuesses.innerHTML = guesses;
  compText = getRandom(letter);
  usersText = document.getElementById("yourGuesses");
  usersText.textContent = "";
}

function game() {
  resetGame();

  document.onkeyup = function(event) {
    // any name
    //debugger;
    var usersLetter = event.key;
    usersText.textContent = usersText.textContent.concat(usersLetter); // the same as above

    if (usersLetter === compText) {
      wins++;
      usersWins.innerHTML = wins;
      resetGame();
    } else {
      guesses--;
      usersGuesses.innerHTML = guesses;
    }

    if (guesses === 0) {
      losses++;
      usersLosses.innerHTML = losses;
      resetGame();
    }
  };
}
window.onload = game;
