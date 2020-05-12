// declare a variable
let someVariable = 4;

// Functions
//
// def some_function():
//   asdasd

function add(first, second) {
  return first + second
}

console.log("output", add(1, 2));

// class Calculator:
//   add(self, first, second):
class Calculator {
  constructor() {
  }

  add(first, second) {
    return first + second;
  }

  subtract(first, second) {
    return first - second;
  }
}

let calculator = new Calculator();
console.log(calculator.add(7, 19));

let drinks = {
  coffee: "A delicious drink for the morning",
  tea: "Another drink for the morning"
};

console.log(drinks.coffee);
console.log(drinks["tea"]);
console.log(drinks.beer);

console.log(undefined == null);
console.log(undefined === null);

// loop review
let fruits = ["apple", "orange", "banana"];

fruits.forEach(function (fruit) {
  console.log("fruit", fruit);
});

// named functions
let printMyName = () => {
  console.log()
};
printMyName();