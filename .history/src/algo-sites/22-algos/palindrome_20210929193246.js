
const stringReversal = (str) => {
    const revStr = str.split("").reverse().join("")
    // console.log(revStr)
    return revStr
}

const palindrome = string => {
// function palindrome(string){
    const revString = stringReversal(string)    
    console.log(revString);
    return true
}

palindrome("racecar")

module.exports = palindrome;