// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should be a string", function() {
        expect(typeof sayHello()).toBe("string");
    })
    it("should return 'Hello, Jane!'.", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it ("should return 'Hello, Alex!'.", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("Should return 'Hello, Pat!", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it ("should return 'Hello, World!'.", function () {
        expect(sayHello()).toBe("Hello, World!");
    })
    it ("should return 'Hello, World!'.", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it ("should return 'Hello, World!'.", function () {
        expect(sayHello(false)).toBe("Hello, World!");
    })
});

describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof sayFive).toBe("function");
    });
    it("should always return a boolean", function() {
        expect(typeof sayFive()).toBe("boolean");
    });
    it("Should return true if x = 5", function () {
        expect(sayFive(5)).toBe(true);
    })
    it("Should return false if x = '5'.", function () {
        expect(sayFive("5")).toBe(false)
    })
    it("Should return false if the number is not 5", function () {
        expect(sayFive(6)).toBe(false);
    })
});

