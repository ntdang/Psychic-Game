
// Grab DOM/HTML Elements and store in variables
    var computerChoiceHTML = document.getElementById('computer-choice');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guesses-left');
    var guessesSoFarHTML = document.getElementById('guesses-sofar');

    // Create a variable array to hold possible computer choices
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Create variables for wins/losses/guesses left/guesses so far
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = [];

    // Generate a computer choice at random
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("computerChoice is " + computerChoice);

    //Create reset function
    var reset = function() {
      guessesLeft = 10;
      guessesSoFar = [];
      computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("New letter is now " + computerChoice);
    }

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var userGuess = event.key.toLowerCase();
        console.log("userGuess is " + userGuess);

      // Check user's guess is a letter
      for (var i = 0; i < alphabet.length; i++) {
        if (userGuess.toLowerCase() === alphabet[i]) {
          guessesSoFar.push(userGuess);
            console.log("you got a letter");

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

          console.log("guessesSoFar is " + guessesSoFar);

        // Write results to HTML
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;
        guessesSoFarHTML.textContent = guessesSoFar;

      }
    }
  };
