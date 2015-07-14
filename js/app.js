
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

  		if(guess < randomNumber) {
  			alert("You are getting warm.")
  		} else if(guess <= 20) {
  			alert("You are getting warmer")
  		} else if(guess <= 10) {
  			alert("You are red hot!")
  		} else if(guess <= 5) {
  			alert("You are getting cold.")
  		} else if(guess > 20 && guess <= 100) {
  			alert("You are getting colder.")
  		} else if(guess > 10 && guess < 20) {
  			alert("You are ice cold!")
  		} else if(guess = randomNumber) {
        alert("You got it right!")
      }
  	}
    randomNumberGenerator();
});


