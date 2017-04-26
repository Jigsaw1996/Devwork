$(document).ready(function() {
	
	// Slide Function
	
	function openSlide(box) {
		if ($(box).hasClass("activeBox")) { // If box is already open, close it
			$(box).slideUp();
			$(box).removeClass("activeBox");
		}
		else { // If box is closed, make sure all other boxes are closed and then open it up.
			$(".activeBox").slideUp();
			$(".activeBox").removeClass("activeBox");
			$(box).slideDown();
			$(box).addClass("activeBox");
		}
	}
	
	// Events
	
	$("#linkGift").on("click", function() {
		openSlide("#giftBox");
	});
	
	$("#linkAccessory").on("click", function() {
		openSlide("#accessoryBox");
	});
	
	$("#linkLiscenced").on("click", function() {
		openSlide("#liscenceBox");
	});

});
