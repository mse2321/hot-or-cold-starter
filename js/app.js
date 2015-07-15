
$(document).ready(function(){
	
  var guessAttempts = 0;
  var randomNumber = 0;
  var guessRecord = $.makeArray();

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
      $("#numberGuessForm")[0].reset();
      $("#guessList").html('');
      $("#feedback").html("Make your Guess!")
      $('#count').html(0);

      guessAttempts = 0;

      randomNumberGenerator();
  	}

  	function randomNumberGenerator() {
      randomNumber = Math.floor(Math.random() * 100);
  	}

  	function takeUserInput() {
  		var guess = $('#userGuess').val();

      if(guess == '') {
        $("#feedback").html("Please Enter a Number!");
        return false;
      } else if (guess > 100) {
        $("#feedback").html("Please Enter a Number between 1 and 100!");
        return false;
      }

      guessAttempts += 1;

  		$("#count").html(guessAttempts);

      rangeEvaluator(guess, randomNumber);
      recordGuesses(guess, guessAttempts);

      return false;
  	}


    function recordGuesses(guess, guessAttempts) { 
      var record = '';
      guessRecord = guess;

      $("#userGuess").each(function() {
        record += "<li>Guess #" + guessAttempts + " = " + guessRecord + "</li><br />";
      });

      $('#guessList').append(record);

    }

    // Where we determine if the guess is close to the random number or not
  	function rangeEvaluator(guess, randomNumber) {

      var numberDifference = Math.abs(randomNumber - guess);

  		if(numberDifference == 0) {
    			  $("#feedback").html("You got it!");
    		} else if(numberDifference < 5) {
    			  $("#feedback").html("You are red hot!");
    		} else if(numberDifference >= 5 && numberDifference < 10) {
    			  $("#feedback").html("You are getting much warmer");
        } else if(numberDifference >= 10 && numberDifference < 20) {
            $("#feedback").html("You are getting warmer.");
        } else if(numberDifference >= 20 && numberDifference < 30) {
            $("#feedback").html("You are getting a bit warmer.");
        } else if(numberDifference >= 30 && numberDifference < 40) {
            $("#feedback").html("You are getting warm");
        } else if(numberDifference >= 40 && numberDifference < 50) {
            $("#feedback").html("You are getting sort of warm.");
        } else if(numberDifference == 50) {
            $("#feedback").html("You are neutral.");
    		} else if(numberDifference > 50 && numberDifference <= 60) {
    			  $("#feedback").html("You are getting cold.");
    		} else if(numberDifference >= 70 && numberDifference <= 80) {
    			  $("#feedback").html("You are getting colder.");
    		} else if(numberDifference >= 90 && numberDifference <= 100) {
    			  $("#feedback").html("You are ice cold!");
        } else {
            $("#feedback").html("You guess is way off!");
        }
      }
      randomNumberGenerator();
});


