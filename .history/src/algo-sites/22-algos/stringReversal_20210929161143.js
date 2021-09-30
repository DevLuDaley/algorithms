const stringReversal = (str) => {
    let revStr = str.split("").reverse().join("")
    // console.log(revStr)
    return revStr
}

stringReversal("Hello World!")
module.exports = stringReversal;