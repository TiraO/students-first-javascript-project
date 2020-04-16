const { expect } = require('chai');

// function that returns an object
// and takes in an argument that's an object
//
let defaultObject = {
  name: "Unknown Object",
  creationDate: "Unknown"
}
// return an object with all the values from the object in the arguments, but filled in defaults.

describe("makeValid", () => {
  describe("when an empty object is passed in", () => {
    it("should return an object like the default object", () => {
      expect(makeValid({})).to.deep.eq({
        name: "Unknown Object",
        creationDate: "Unknown"
      })
    });

    describe("when the name is passed in", () => {
      it("should use the passed in name", () => {
        expect(makeValid({name: "Some Cool Name"})).to.deep.eq({
          name: "Some Cool Name",
          creationDate: "Unknown"
        });
      });
    });
    describe("when the creationDate is passed in", () => {
      it("should use the passed creationDate", () => {
        expect(makeValid({creationDate: "2022-06-24"})).to.deep.eq({
          name: "Some Cool Name",
          creationDate: "2022-06-24"
        });
      });
    });
  });
});