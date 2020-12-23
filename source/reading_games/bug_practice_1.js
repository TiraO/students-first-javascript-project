let money = 10;
if (money = 0) {
  console.log("You don't have enough money!")
}


let ageTextBox = document.getElementById("age-input");
let age = ageTextBox.value;
console.log("your age next year will be " + 1 + age);


let printGreeting = (name) -> {
  console.log("Hello" + name)
}

let showUser = (uesr) => {
  document.write(`
<div>
    <span>user.name</span>
    <span>user.email</span>
</div>
`)
}

class AnagramSolver {
  isAnagram(word1, word2) {
    if (word1.length == word2.length) {
      let index = 1;
      let usedLetterIndices = []
      while (index < word1.length) {
        let word2index = word2.indexOf(word1[index])
        if (word2.includes(word1[index])) {
          if (usedLetterIndices.includes(word2index)) {
            return false
          } else {
            usedLetterIndices.push(word2index)
          }
        } else {
          return false
        }
        index = index + 1;
      }
      return true;
    } else {
      return false;
    }
  };
}