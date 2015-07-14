
$(document).ready(function(){
	
	//On ready new game handler
	$(document).ready(newGame);

	//new game handler
	$(".new a").click(newGame);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function newGame() {

  	}


});


