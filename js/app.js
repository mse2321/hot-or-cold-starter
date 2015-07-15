
$(document).ready(function(){
	
  var guessAttempts = 0;
  var randomNumber = 0;
	//On ready new game handler
	//$(document).ready(newGame);

	//new game and random number generator handler
	$("a[class='new']").click(newGame);

	// user input handler
	$("#guessButton").click(takeUserInput);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function newGame() {
		  //window.location.href="index.html";
      $("#numberGuessForm")[0].reset();
      console.log("New game started!")
      $('#count').html(0);
      guessAttempts = 0;

      randomNumberGenerator();
  	}

  	function randomNumberGenerator() {
      randomNumber = Math.floor(Math.random() * 100);
      console.log(randomNumber);
  	}

  	function takeUserInput() {
  		var guess = $('#userGuess').val();
  		console.log(guess);

      guessAttempts += 1;

  		$("#count").html(guessAttempts);
      rangeEvaluator(guess, randomNumber);

      return false;
  	}

    // Where we determine if the guess is close to the random number or not
  	function rangeEvaluator(guess, randomNumber) {
      console.log(randomNumber);

      var numberDifference = randomNumber - guess;

  		if(numberDifference == 0) {
  			alert("You got it!")
  		} else if(numberDifference <= 5) {
  			alert("You are red hot!")
  		} else if(numberDifference < 10) {
  			alert("You are getting warmer")
      } else if(numberDifference <= 20) {
        alert("You are getting warm.")
      } else if(numberDifference == 50) {
        alert("You are neutral.")
  		} else if(numberDifference > 50 && numberDifference <= 60) {
  			alert("You are getting cold.")
  		} else if(numberDifference >= 70 && numberDifference <= 80) {
  			alert("You are getting colder.")
  		} else if(numberDifference >= 90 && numberDifference <= 100) {
  			alert("You are ice cold!")
      } else {
        alert("You guess is way off!")
      }
  	}
    randomNumberGenerator();
});


