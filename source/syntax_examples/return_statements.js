let add = (first, second) => {
    return first + second
};
let colors = []
console.log(add(1, 2))
console.log(add(6, 3))
console.log(add(4, 2))

let divide = (first, second) => {
    console.log("we are dividing");
    return first / second
};
console.log(divide(9, 3))
console.log(divide(4, 2))
console.log(divide(1, 1))

let fullName = (first, last) => {
    return first + " " + last
};
console.log(fullName("Carolyn", "Stallard"))
console.log(fullName("Tira", "Odhner"))

console.log(divide(add (6, 3), divide(3, 1)))
