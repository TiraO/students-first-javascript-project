let isAnagram = (word1, word2) => {
  if (word1.length == word2.length) {
    let index = 0;
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
// console.log(isAnagram("pale", "leap"), "should be true");
// console.log(isAnagram("stool", "loots"), "should be true");
// console.log(isAnagram("apple", "appel"), "should be true");
// console.log(isAnagram("apeal", "apple"), "should be false")
// console.log(isAnagram("apple", "apeal"), "should be false")
// console.log(isAnagram("papal", "apple"));
// console.log(isAnagram("apple", "papal"));
// console.log(isAnagram("paael", "apple"));
// console.log(isAnagram("road", "leap"));
// console.log(isAnagram("rod", "leap"));

let letterCounts = {
  s: 1,
  t: 1,
  o: 2,
  l: 1
}

let isAnagram2 = (word1, word2) => {
  let word1LetterCounts = {};
  word1.split('').forEach((letter) => {
    if (word1LetterCounts[letter] == null) {
      word1LetterCounts[letter] = 1;
    } else {
      word1LetterCounts[letter] = word1LetterCounts[letter] + 1
    }
  });

  let word2LetterCounts = {};
  word2.split('').forEach((letter) => {
    if (word2LetterCounts[letter] == null) {
      word2LetterCounts[letter] = 1;
    } else {
      word2LetterCounts[letter] = word2LetterCounts[letter] + 1
    }
  });

  let uniqueLetters = Object.keys(word1LetterCounts)
  for(let index = 0; index < uniqueLetters.length; index = index + 1) {
    let uniqueLetter = uniqueLetters[index];
    if(word1LetterCounts[uniqueLetter] != word2LetterCounts[uniqueLetter]){
      return false;
    }
  }

  return true;
}

console.log(isAnagram2("pale", "leap"), "should be true");
console.log(isAnagram2("stool", "loots"), "should be true");
console.log(isAnagram2("apple", "appel"), "should be true");
console.log(isAnagram2("apeal", "apple"), "should be false")
console.log(isAnagram2("apple", "apeal"), "should be false")
console.log(isAnagram2("papal", "apple"));
console.log(isAnagram2("apple", "papal"));
console.log(isAnagram2("paael", "apple"));
console.log(isAnagram2("road", "leap"));
console.log(isAnagram2("rod", "leap"));
