describe("Calculator", function() {
    describe('Addition function', function() {
        it('Add two numbers together and return the result', function() {
            expect(addition(2,2)).toBe(4);
        });
		it("Second run with different numbers", function() {
			expect(addition(7, 19)).toBe(26);
		});
		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			addition("Hello");
			expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
		});
    });
});
