// const palindrome = string => {
const isPalindrome = string => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringCharacters = string
    .toLowerCase()
    .split("")
    .reduce(
      (characters, character) =>
        validCharacters.indexOf(character) > -1
          ? characters.concat(character)
          : characters,
      []
    );
  return stringCharacters.join("") === stringCharacters.reverse().join("");
};

const _isPalindrome = string =>
  string
    .split("")
    .every((character, index) => character === string[string.length - 1 - index]);

const __isPalindrome = string => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();

  return (
    cleaned ===
    cleaned
      .split("")
      .reverse()
      .join("")
  );
};
// }

// palindrome("racecar")
// palindrome("sit ad est love")
// palindrome("Cigar? Toss it in a can. It is so tragic")
// palindrome("Cigar Toss it in a can. It is so tragic")
isPalindrome("Cigar Toss it in a can. It is so TragiC")
console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic"));

module.exports = palindromeSol;