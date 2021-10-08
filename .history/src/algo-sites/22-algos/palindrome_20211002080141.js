const stringReversal = (str) => {
  const revStr = str.split('').reverse().join('');
  // console.log(revStr)
  return revStr;
};

const palindrome = (string) => {
// function palindrome(string){
  const revString = stringReversal(string);
  console.log(revString);
  console.log(string == revString);
  return string == revString;
  // return true
};

// palindrome("racecar")
// palindrome("sit ad est love")
// palindrome("Cigar? Toss it in a can. It is so tragic")
// palindrome("Cigar Toss it in a can. It is so tragic")
palindrome('Cigar Toss it in a can. It is so TragiC');
palindrome('cigart os si tI .nac a ni ti ssoT ragiC');

module.exports = palindrome;
