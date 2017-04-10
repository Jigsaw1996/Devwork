var green = document.getElementById("green");
var x = "lowercase string";

var y = x.toUpperCase();
var z = y.endsWith("G");

if (z) {
	green.style.color = "green";
}
else {
	green.style.red = "red";
}
