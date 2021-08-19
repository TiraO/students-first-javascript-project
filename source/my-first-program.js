console.log("hello")
let a = 18
let b = 9
console.log(a + b)

a += 2
a += 2
a += 2
a += 2
console.log(a + b)

// 6 is even
// 19 is odd
// Math.ceil(6.2) // 7
// Math.floor(6.7) // 6
// Math.round()
// 15 % 2 == 0
// 15 / 2 // 7.5
// Math.floor(7.5) // 7

let number = 1;
if (number / 2 == Math.floor(number / 2)) {

} else {
  console.log("number is odd")
}


let evenDigits = [0, 2, 4, 6, 8] // last digit means even
let textNumber = "1239458123910000000096"

let lastDigitText = textNumber[textNumber.length - 1]
let numberIsEven = evenDigits.includes(Number.parseInt(lastDigitText))


let checkIfEven = (number) => {
  let numberIsMultipleOf2 = (number % 2 == 0)
  if (numberIsMultipleOf2) {
    console.log(number + " is even")
  } else {
    console.log(number + " is odd")
  }
}

checkIfEven(9)
checkIfEven(10)
checkIfEven(11)
checkIfEven(12)
checkIfEven(13);
checkIfEven(14);

// if (isElementBuilt(element, photo1)) {
//   setPortalStatus(element, "BUILT");
// }

let findElementInPhoto = (elementId, photo)=> {
  let segments = segmentPhoto(photo)
  let elementImageFromBim = getImageOfElement(elementId);
  let matchingSegment = segments.find((segment)=>{
    return isMatchingSegment(segment, elementImageFromBim);
  })
  // estimate where in the photo should the element be
  // something about the shape of element in BIM == shape in the photo
  return matchingSegment
}

let isElementBuilt = (elementId, photo) => {
  let elementInPhoto = findElementInPhoto(elementId, photo);
  if (elementInPhoto != null) {
    return true;
  } else {
    return false;
  }
}

