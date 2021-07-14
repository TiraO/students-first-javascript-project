const {expect} = require('chai')
let comparePoints = (array1, array2) => {
    if (array1.length != array2.length) {
        return false;
    }

    let foundMismatch = false;
    array1.forEach((point, index) => {
        if (foundMismatch == false) {
            foundMismatch = point != array2[index]
        }
    })
    return !foundMismatch
}
describe("#comparePoints", () => {
    describe('when the contents of the arrays are equal', function () {
        it('should return true', function () {

            let array1 = [1, 2, 3]
            let array2 = [1, 2, 3]
            expect(comparePoints(array1, array2)).to.eq(true)
        });
    });

    describe("when the contents are completely different", () => {
        it('should return false', function () {
            let array1 = [1, 2, 3]
            let array2 = [6, 5, 4]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
    describe("when the last item is different", () => {
        it('should return false', function () {
            let array1 = [1, 2, 3]
            let array2 = [1, 2, 4]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
    describe("when the first item is different", () => {
        it('should return false', function () {
            let array1 = [1, 2, 3]
            let array2 = [9, 2, 3]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
    describe("when the lists are different lengths", () => {
        it('should return false', function () {
            let array1 = [1, 2, 3]
            let array2 = [1, 2, 3, 1]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
})