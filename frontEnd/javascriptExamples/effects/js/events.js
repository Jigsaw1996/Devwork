$(document).ready(function() {

	$("#squareToggle").on("click", function() {
		$("#toggleSquare").toggle();
	});
	
	$("#squareSlide").on("click", function() {
		$("#slideSquare").slideToggle(100);
	});
	
	$("#squareFade").on("click", function() {
		$("#fadeSquare").fadeToggle(500);
	});

	$("#squareFadeTo").on("click", function() {
		$("#fadeToSquare").fadeTo(500, 0.5);
	});
});
