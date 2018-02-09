
// Grab DOM/HTML Elements and store in variables
    var computerChoiceHTML = document.getElementById('computer-choice');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guesses-left');
    var userGuessHTML = document.getElementById('user-guess');

    // Create a variable array to hold possible computer choices
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Create variables for wins/losses/guesses left/guesses so far
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var userGuess = '';

    //Create reset function
    var reset = function() {
      guessesLeft = 10;
      userGuess = [];
    }

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var userGuess = event.key.toLowerCase();
      console.log(userGuess);

      // Generate a computer choice at random
      var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(computerChoice);

      // Check user's guess is a letter
      // if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        // Let's run the rest of the game

      if (userGuess === computerChoice) {
        wins++;
        reset();
      } else {
        guessesLeft--;
      }


      if (guessesLeft === 0) {
        losses++;
        reset();
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
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;
        userGuessHTML.textContent = userGuess;
        //Need to display list of guessed letters
      

      // } else {
      //   alert("you don't know how to play rock paper scissors");
      // }

    };
  
