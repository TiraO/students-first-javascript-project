const { expect } = require('chai');
const Firstnamifier = require("../source/firstnamifier");

describe("Firstnamifier", () => {
  let firstnamifier;

  describe("#split", () => {
    it("grabs the first word in each entry and returns it", () => {
      firstnamifier = new Firstnamifier();
      let names = ["Smaran Dayal", "Eric Iworsley", "Tira Odhner", "James McFoobar"];
      let firstNames = firstnamifier.split(names);

      let expectedResult = ["Smaran", "Eric", "Tira", "James"];
      expect(firstNames).to.deep.eq(expectedResult);
    });
  });
});