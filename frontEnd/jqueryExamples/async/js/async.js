$(document).ready(function() {

	setTimeout(function() {
		$("#timeout").addClass("green").html("Colour changed!");
	}, 10000);
	
	setInterval(function() {
		if ($("#interval").attr("class") == "red") {
			$("#interval").removeClass("red").addClass("blue").html("I'm blue");
		}
		else {
			$("#interval").removeClass("blue").addClass("red").html("I'm red");
		}
	}, 2000);
	
	
	setInterval( function() {
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		$("#printTime").html(hour + ":" + minute + ":" + second);
	}, 500);
});
