import AbstractClass from '../app/abstractModule/abstractModule'

describe("Abstract class tests", function() {
    let emptyObj = new AbstractClass();
    it("isObject", function() {
        expect(typeof emptyObj).toBe('object');
    });
    it("default title", function() {
        expect(emptyObj.title).toBe('example Title');
    });
    it("default text", function() {
        expect(emptyObj.text).toBe('example text');
    });
    it("default model", function() {
        expect(typeof emptyObj.model).toBe('object');
    });
    it("default isShow", function() {
        expect(emptyObj._isShow).not.toBe(true);
    });
});