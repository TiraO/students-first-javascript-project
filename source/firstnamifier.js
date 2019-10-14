module.exports = class Firstnamifier {
    split(fullNames) {
        let smaransNames = fullNames[0].split(" ")
        let ericsNames = fullNames[1].split(" ")
        let bothFirstNames = [smaransNames[0], ericsNames[0]]
        return bothFirstNames
    }
}