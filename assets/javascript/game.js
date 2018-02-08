
// Grab DOM/HTML Elements and store in variables
    var computerChoiceHTML = document.getElementById('computer-choice');
    var userGuessHTML = document.getElementById('user-guess');
    var winsHTML = document.getElementById('wins');
    var guessesLeftHTML = document.getElementById('guesses-left');
    var soFarHTML = document.getElementById('so-far'); 

    // Create a variable array to hold possible computer choices
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Create variables for wins/losses/guess left
    var wins = 0;
    var losses = 0;
    var guesses = 10;

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var userGuess = event.key.toLowerCase();

      // Generate a computer choice at random
      var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

      // Check user's guess against computer's choice with if/else statements
      // if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        // Let's run the rest of the game

      if (userGuess === computerChoice) {
        wins++;
      } else {
        guesses--;
      }

      if (guesses === 0) {
        losses++;
      }

        // if ((userGuess === "r") && (computerGuess === "s")) {
        //   wins++;
        // } else if ((userGuess === "r") && (computerGuess === "p")) {
        //   losses++;
        // } else if ((userGuess === "s") && (computerGuess === "r")) {
        //   losses++;
        // } else if ((userGuess === "s") && (computerGuess === "p")) {
        //   wins++;
        // } else if ((userGuess === "p") && (computerGuess === "s")) {
        //   losses++;
        // } else if ((userGuess === "p") && (computerGuess === "r")) {
        //   wins++;
        // } else if (userGuess === computerGuess) {
        //   ties++;
        // }

        // Write results to HTML
        userGuessHTML.textContent = userGuess;
        computerChoiceHTML.textContent = computerChoice;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;

      } else {
        alert("you don't know how to play rock paper scissors");
      }

    };
  
