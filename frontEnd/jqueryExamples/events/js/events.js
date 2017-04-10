$(document).ready(function() {

	var clickBlue = $("#clickBlue");	
	clickBlue.on("click", function(){
			clickBlue.addClass("blue");
	});
	
	var hoverGreen = $("#hoverGreen");
	hoverGreen.on("mouseenter", function(){
			hoverGreen.addClass("green");
	});
	hoverGreen.on("mouseleave", function(){
			hoverGreen.removeClass("green");
	});
	
	var scrollRed = $("#scrollRed");
	$(window).on("scroll", function() {
		scrollRed.addClass("red");
	});
	
});
