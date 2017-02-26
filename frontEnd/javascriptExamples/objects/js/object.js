var divContainer = document.getElementById("box");
var consoleList = document.getElementById("consoleList");
var revealIdentity = document.getElementById("revealIdentity");
var suitUp = document.getElementById("suitUp");
var suitOff = document.getElementById("suitOff");


var batman = {
	firstName: "Bruce",
	lastName: "Wayne",
	suit: false,
	
	revealIdentity: function() {
		return "My real name is " + this.firstName + " " + this.lastName + "!";
	},
	
	suitUp: function() {
		if (this.suit == false) { 
			this.suit = true;
			return "Gotham needs me, suit up";
		}
		
		else {
			return "My suit is already on, Alfred";
		}
	},
	
	suitOff: function() {
		if (this.suit == true) {
			this.suit = false;
			return "Batman disappears... for now";
		}
		
		else {
			return "My suit is already off, Alfred";
		}
	},
};

function consoleUpdate(relevantFunction) {
	var action = document.createElement("li");
	action.innerHTML = relevantFunction;
	consoleList.appendChild(action);
	box.scrollTop = box.scrollHeight;
}

revealIdentity.addEventListener("click", function() {
	consoleUpdate(batman.revealIdentity());
});

suitUp.addEventListener("click", function() {
	consoleUpdate(batman.suitUp());
});

suitOff.addEventListener("click", function() {
	consoleUpdate(batman.suitOff());
});
