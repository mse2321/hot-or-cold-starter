
$(document).ready(function(){
	
	//On ready new game handler
	//$(document).ready(newGame);

	//new game handler
	$(".new a").click(newGame);

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
		window.location.href="index.html";
  	}

  	function randomNumberGenerator() {

  	}

  	function takeUserInput(guess) {
		var guess = $('#userGuess').val();
		console.log(guess);
		$("#count").html(guess);
  	}

  	function rangeEvaluator(guess) {

  		if(guess <= guess) {
  			alert("You are getting warm.")
  		} else if(guess <= guess) {
  			alert("You are getting warmer")
  		} else if(guess <= guess) {
  			alert("You are red hot!")
  		} else if(guess <= guess) {
  			alert("You are getting cold.")
  		} else if(guess <= guess) {
  			alert("You are getting colder.")
  		} else if(guess <= guess) {
  			alert("You are ice cold!")
  		}
  	}

});


