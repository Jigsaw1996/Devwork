$(document).ready(function() {
	
	// Slide function for boxes on the home page
	
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
			$('html, body').animate({scrollTop:$("#scrollLock").position().top - 70}, 'slow');
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
