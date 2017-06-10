Calculator = function() {
    this.value = 0;
};

Calculator.prototype.error = function(reason) {
	alert(reason + " argument must be a number");
}
 
Calculator.prototype.add = function(number1, number2) {
    if ((typeof(number1) == "number") && (typeof(number2) == "number")) {
        this.value = number1 + number2;
    } else {
        this.error("Addition");
    }
};

Calculator.prototype.subtract = function(number1, number2) {
    if ((typeof(number1) == "number") && (typeof(number2) == "number")) {
        this.value = number1 - number2;
    } else {
        this.error("Subtract");
    }
}

Calculator.prototype.multiply = function(number1, number2) {
    if ((typeof(number1) == "number") && (typeof(number2) == "number")) {
        this.value = number1 * number2;
    } else {
        this.error("Multiplication");
    }
}

Calculator.prototype.divide = function(number1, number2) {
    if ((typeof(number1) == "number") && (typeof(number2) == "number")) {
        this.value = number1 / number2;
    } else {
        this.error("Division");
    }
}
