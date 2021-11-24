const {expect} = require("chai");
const CipherSolver = require("./cipher-solver");
describe("CipherSolver", () => {
  let solver;
  beforeEach(() => {
    solver = new CipherSolver();
  });
  describe("#getRailCandidates", () => {
    it("applies different line wrappings and returns the candidates", () => {

      let input =
        "16" +
        "27" +
        "38" +
        "49" +
        "50"

      let railCandidates = solver.getRailCandidates(input);
      expect(railCandidates).to.include("1234567890");

      input =
        "hye a" +
        "in T " +
        " aii " +
        "mmsr "

      railCandidates = solver.getRailCandidates(input);
      expect(railCandidates).to.include("hi myname is Tira   ");
    });

  });
});