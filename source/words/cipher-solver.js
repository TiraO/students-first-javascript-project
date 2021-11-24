class CipherSolver {
  getRailCandidates(input) {
    let result = []
    for (let cipherColumns = 2; cipherColumns < input.length; cipherColumns++) {

      let candidate = "";
      let cipherRows = input.length / cipherColumns;
      for (let column = 0; column < cipherColumns; column++) {
        for (let rowNumber = 0; rowNumber < cipherRows; rowNumber++) {
          let index = rowNumber * cipherColumns + column;
          if (input.length > index) {
            candidate += input[index];
          }
        }
      }
      result.push(candidate);
    }
    return result
  }
}

module.exports = CipherSolver;