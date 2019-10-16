module.exports = class Firstnamifier {
    split(fullNames) {
        let allFirstNames = []
        fullNames.forEach((fullName) => {
            let firstName = fullName.split(" ")[0]

            allFirstNames.push(firstName)

        })
        return allFirstNames;
    }
};