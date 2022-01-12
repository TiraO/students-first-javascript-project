let insertSequence = require("./genome_inserter.js")
let {expect} = require("chai")
//open questions
// 1 index or 0 index on startIndex in the .gtf file?
// <seqname> <source> <feature> <start> <end> <score> <strand> <frame> [attributes] [comments]
describe('GenomeInserter', () => {
  describe('#insertSequence', () => {
    let newSequence, existingBases, existingAnnotations;
    before(() => {
      newSequence = {
        bases: 'TAGCTAaacc',
        annotation: {
          seqname: 'a123',
          startIndex: 5,
        }
      }
      existingBases = "AAAAAAAAAA"
      existingAnnotations = "some-id\tsome-other-name\t2\t4\tsome description stuff\n" +
        "some-id2\tsome-other-name\t8\t9\tsome second description stuff"
    });
    it('should add the sequence to dna_output.txt', () => {
      let result = insertSequence(existingBases, existingAnnotations, newSequence)
      let newBases = result.bases;
      expect(newBases).to.eq("AAAAATAGCTAaaccAAAAA");
    });

    it('should add a new annotation for the new sequence to the annotations', () => {
      let result = insertSequence(existingBases, existingAnnotations, newSequence)
      let newAnnotations = result.annotations;

      let insertedAnnotation = newAnnotations.split("\n")[1]
      expect(insertedAnnotation).to.eq("a123\t5\t15");
    });

    it('should update the locations of annotations that are after the insertion', () => {
      let result = insertSequence(existingBases, existingAnnotations, newSequence)
      let newAnnotations = result.annotations;

      expect(newAnnotations).to.eq("some-id\tsome-other-name\t2\t4\tsome description stuff\n" +
        "a123\t5\t15\n" +
        "some-id2\tsome-other-name\t18\t19\tsome second description stuff")

    });
  });
});
