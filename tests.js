// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

/*
describe("subtract", function () {
    it("should be a defined function", function () {
        expect(typeof subtract).toBe("function");
    });
    it("should return a number when passed two number arguments", function () {
        expect(typeof subtract(3, 1)).toBe("number");
    });
    it("it should return false when passed any argument that is not a number", function () {
        expect(subtract()).toBe(false);
        expect(subtract(2)).toBe(false);
        expect(subtract("Banana", 6)).toBe(false);
    })
    it("should return 34 when passed the arguments of 64 and 30", function () {
        expect(subtract(64, 30)).toBe(34);
    });
    it("should return 75 when passed the arguments of 100 and 25", function () {
        expect(subtract(100, 25)).toBe(75);
    });
    it("should return -7 when passed the arguments of 0 and 7", function () {
        expect(subtract(0, 7)).toBe(-7);
    });
    it("should return 295 when passed the arguments of 20 and -275", function () {
        expect(subtract(20, -275)).toBe(295);
    });
    it("should return 0 when passed the arguments of 0 and 0", function () {
        expect(subtract(0, 0)).toBe(0);
    });
});

*/

// describe("should return a string when called", function () {
//     it("should be a defined function", function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
// });
//this also worked as of exercise 4, step 3 when everything should be green.

describe("should return a string when called", function () {
    it("should be a defined function", function () {
        let input;
        expect(sayHello(input)).toBe("Hello," + input + "!");
    });
});