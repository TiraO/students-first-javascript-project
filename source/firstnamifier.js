module.exports = class Firstnamifier {
    split(fullNames) {
        let allFirstNames = []
        fullNames.forEach((fullName) => {
            let firstName = fullName.split(" ")[0]
            console.log(firstName, fullName)
            allFirstNames.push(firstName)

        })
        return allFirstNames;
    }
};