
# Class 8:

# class 7: create

# class 6: Debugging and Clarifying Concepts

### Clarification / Review:
Loops - forEach
Using the Debugger to step through code and inspect variables (in WebStorm this time)
how arguments get passed to functions
Using (parens) for calling functions
Using [brackets] for accessing values in a list


Using 'new' to create an instance of a class

### New concept:
Multiple files: export / import
```javascript
//inside source/something.js :
module.exports = Something;

//inside tests/something_test.js
const Something = require("../source/something");
```

### New concept:
- passing multiple arguments to a function

```javascript
// declaring the function
function someFunction(someArgument, someOtherArgument) {
   //do stuff…
   return "some return value"
}

// calling the function and assigning the result to a variable
let someResult = someFunction("some-value", "some second value");
```

### New concept:
- instances vs. types

### New ways of declaring functions

```javascript
class SomeClass {
   someMethod(someArgument){
       // do stuff ..
       return "some return value"
   }
}

(someArgument) => {
   //do stuff…
   return "some return value"
}
```