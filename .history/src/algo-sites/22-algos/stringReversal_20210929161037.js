const stringReversal = (str) => {
    let splitStr = str.split("")
    console.log(splitStr);
    console.log(splitStr.reverse());
    console.log(str.split("").reverse().join(""))
    return str.split("").reverse().join("")
}

stringReversal("Hello World!")
module.exports = stringReversal;