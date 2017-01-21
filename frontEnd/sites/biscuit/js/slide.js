
// Buttons
var homeBtn = document.getElementById("homeBtn");
var contactBtn = document.getElementById("contactBtn");

// Individual Slides 
var slides = document.getElementsByClassName("slide");
var firstSlide = slides[0];
var secondSlide = slides[1];

// Sliding Motion
function slideHome() {
	firstSlide.style.left = 0;
	secondSlide.style.left = 100 + "%";
}

function slideContact() {
	firstSlide.style.left = "-" + 100 + "%";
	secondSlide.style.left = 0;
}

// Event Listeners
homeBtn.addEventListener("click", slideHome);
contactBtn.addEventListener("click", slideContact);
