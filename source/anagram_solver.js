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
          usedLetterIndices.push(word2.indexOf(word1[index]))
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
console.log(isAnagram("pale", "leap"), "expects true");
console.log(isAnagram("papal", "apple"));
console.log(isAnagram("apple", "papal"));
console.log(isAnagram("paael", "apple"));
console.log(isAnagram("road", "leap"));
console.log(isAnagram("rod", "leap"));
