import Abstract from '../app/abstractComponent/abstractComponent';

describe("First test", function() {
    // beforeEach(module("./mainView/template/main-view.html"));

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains spec with an expectation", function() {
        expect(true).toBe(false);
    });
    it("contains spec with an expectation", function() {
        expect(typeof(new Abstract())).toBe('object');
    });
});