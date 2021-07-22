const {expect} = require('chai')
let comparePoints = (array1, array2) => {
    if (array1.length != array2.length) {
        return false;
    }

    let foundMismatch = false;
    array1.forEach((point, index) => {
        if (foundMismatch == false) {
            foundMismatch = (point.x != array2[index].x) || (point.y != array2[index].y)
        }
    })
    return !foundMismatch
}
describe("#comparePoints", () => {
    describe('when the contents of the arrays are equal', function () {
        it('should return true', function () {

            let array1 = [{x: 5, y: 3}, {x: 2, y: 7}]
            let array2 = [{x: 5, y: 3}, {x: 2, y: 7}]
            expect(comparePoints(array1, array2)).to.eq(true)
        });
    });

    describe("when the contents are completely different", () => {
        it('should return false', function () {
            let array1 = [{x: 5, y: 3}, {x: 2, y: 7}]
            let array2 = [{x: 1, y: 6}, {x: 5, y: 3}]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
    describe("when the last item is different", () => {
        it('should return false', function () {
            let array1 = [{x: 5, y: 3}, {x: 2, y: 7}]
            let array2 = [{x: 5, y: 3}, {x: 2, y: 8}]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
    describe("when the first item is different", () => {
        it('should return false', function () {
            let array1 = [{x: 3, y: 3}, {x: 2, y: 7}]
            let array2 = [{x: 5, y: 3}, {x: 2, y: 7}]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
    describe("when the lists are different lengths", () => {
        it('should return false', function () {
            let array1 = [{x: 5, y: 3}, {x: 2, y: 7}]
            let array2 = [{x: 5, y: 3}, {x: 2, y: 7}, {x: 1, y: 2}]
            expect(comparePoints(array1, array2)).to.eq(false)

        });
    })
})