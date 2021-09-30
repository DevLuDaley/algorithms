const palindrome = string => {
ing =>
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