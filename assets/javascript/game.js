// Guess what letter I'm thinking of

var wins;
var losses;
var guesses;
var usersWins;
var usersLosses;
var usersGuesses;
var usersText;

function resetGame() {
  wins = 0;
  losses = 0;
  guesses = 9;
  usersWins = document.getElementById("wins");
  usersWins.innerHTML = wins;
  usersLosses = document.getElementById("losses");
  usersLosses.innerHTML = losses;
  usersGuesses = document.getElementById("guesses");
  usersGuesses.innerHTML = guesses;
}

function game() {
  resetGame();

  var letter = [];
  var usersText = document.getElementById("yourGuesses");
  var compText;

  for (i = 97; i <= 122; i++) {
    var str = String.fromCharCode(i);
    letter.push(str);
  }

  function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  document.onkeyup = function(event) {
    // any name
    usersText.textContent = event.key; // the same as above
    compText = getRandom(str);
    if (usersText.textContent === compText) {
      wins++;
      usersWins.innerHTML = wins;
    } else {
      losses++;
      usersLosses.innerHTML = losses;
    }
    guesses--;
    usersGuesses.innerHTML = guesses;
    if (guesses === 0 && losses > wins) {
      alert("game over! you're lost");
      resetGame();
      usersText.textContent = "";
    } else if (guesses === 0 && losses < wins) {
      alert("game over! you're win");
      resetGame();
      usersText.textContent = "";
    }
  };

  // Wins: (# of times the user has guessed the letter correctly)

  // Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

  // Guesses Left: (# of guesses left. This will update)

  // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

  // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

  // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
}
window.onload = game;
