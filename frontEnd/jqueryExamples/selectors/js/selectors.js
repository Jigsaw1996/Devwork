$(document).ready(function() {
	
	var red = $(".red");
	red.addClass("colourRed");
	
	var blue = $("#blue");
	blue.addClass("colourBlue");

	var listContainer = $("#listContainer");
	listContainer.append("<li>This list item has been added through JQuery, not HTML</li>");
	
	var firstItem = $("#psuedo li:first");
	firstItem.addClass("colourGreen");
});
