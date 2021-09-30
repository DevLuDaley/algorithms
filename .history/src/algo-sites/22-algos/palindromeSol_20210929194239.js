const palindrome = string => {
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
}

// palindrome("racecar")
// palindrome("sit ad est love")
// palindrome("Cigar? Toss it in a can. It is so tragic")
// palindrome("Cigar Toss it in a can. It is so tragic")
palindrome("Cigar Toss it in a can. It is so TragiC")
palindrome("cigart os si tI .nac a ni ti ssoT ragiC")

module.exports = palindrome;