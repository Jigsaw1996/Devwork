describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2,2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12, 7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Addition argument must be a number");
        });
    });
    describe("Subtraction function", function() {
		it("Should subtract two numbers and return the result", function() {
			calc.subtract(4,2);
			expect(calc.value).toBe(2);
		});
		it("Should return another test with different numbers and correct result", function() {
			calc.subtract(10,4);
			expect(calc.value).toBe(6);
		});
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.subtract();
            expect(window.alert).toHaveBeenCalledWith("Subtract argument must be a number");
        });
	});
    describe("Multiply function", function() {
		it("Should multiply two numbers and return the result", function() {
			calc.multiply(5,10);
			expect(calc.value).toBe(50);
		});
		it("Should return another test with different numbers and correct result", function() {
			calc.multiply(2,4);
			expect(calc.value).toBe(8);
		});
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.multiply();
            expect(window.alert).toHaveBeenCalledWith("Multiplication argument must be a number");
        });
	});
    describe("Division function", function() {
		it("Should divide two numbers and return the result", function() {
			calc.divide(10,2);
			expect(calc.value).toBe(5);
		});
		it("Should return another test with different numbers and correct result", function() {
			calc.divide(24,4);
			expect(calc.value).toBe(6);
		});
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.divide();
            expect(window.alert).toHaveBeenCalledWith("Division argument must be a number");
        });
	});
});
