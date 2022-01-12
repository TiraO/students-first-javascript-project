let insertSequence = (existingBases, existingAnnotations, newSequence)=>{
  let bases = ""
  let beforeBases = existingBases.substring(0, newSequence.annotation.startIndex)
  let afterBases = existingBases.substring(newSequence.annotation.startIndex, existingBases.length)
  bases += beforeBases
  bases += newSequence.bases;
  bases += afterBases;
  let annotations = ""
  let beforeAnnotations = existingAnnotations.substring()

  return {bases,annotations};
}
let parseTsv = (tsv)=>{
  let lines = tsv.split("\n");
  let rowsWithCells = lines.map((line)=>{
    return line.split("\t")
  });

  return rowsWithCells;
}
module.exports = insertSequence