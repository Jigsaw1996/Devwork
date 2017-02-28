addEventListener("load", function() {
	
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
	
	// Info Squares
	var fourK = document.getElementById("fourK");
	var editing = document.getElementById("editing");
	var upload = document.getElementById("upload");
	
	// Popups
	var popupFourK = document.getElementById("popupFourK");
	var popupEditing = document.getElementById("popupEditing");
	var popupUpload = document.getElementById("popupUpload");
	
	// Popup Function
	function openTab(tab) {
		tab.style.display = "block";
		document.documentElement.style.overflow = 'hidden';
	}	

	// Event Listeners
	homeBtn.addEventListener("click", slideHome);
	contactBtn.addEventListener("click", slideContact);
	
	fourK.addEventListener("click", function() {
		openTab(popupFourK);
	});
	editing.addEventListener("click", function() {
		openTab(popupEditing);
	});
	upload.addEventListener("click", function() {
		openTab(popupUpload);
	});
});
