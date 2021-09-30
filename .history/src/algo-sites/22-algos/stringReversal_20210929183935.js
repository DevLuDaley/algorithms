const stringReversal = (str) => {
    const revStr = str.split("").reverse().join("")
    // console.log(revStr)
    return revStr
}

stringReversal("Hello World!")


const reverse1 = string =>
  string
    .split("")
    .reverse()
    .join("");

const reverse2 = string => {
  let result = "";
  for (let character of string) {
      result = character + result;
    }
  return result;
};

const reverse3 = string =>
  string.split("").reduce((result, character) => character + result);

  const palindrome = (params) => {
    console.log(params);
    return true
}

module.exports = stringReversal;
module.exports = reverse1;
module.exports = reverse2;
module.exports = reverse3;
module.exports = palindrome;