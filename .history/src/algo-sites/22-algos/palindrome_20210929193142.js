
const stringReversal = (str) => {
    const revStr = str.split("").reverse().join("")
    // console.log(revStr)
    return revStr
}

const palindrome = string => {
// function palindrome(string){
    const revdString = stringReversal(string)    
    // console.log(params);
    return true
}

module.exports = palindrome;