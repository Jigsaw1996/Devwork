var listItems = document.getElementById("items").getElementsByTagName("li");
console.log = "test"
function listCalculation(number, calculation) {
	listItems[number].innerHTML = calculation * 2;
}

listCalculation(0, 2);
listCalculation(1, 10);
listCalculation(2, 20);
