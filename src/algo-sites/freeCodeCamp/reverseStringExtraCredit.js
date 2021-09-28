let str = "hello";
// "hello"
let splitStr = str.split("");
console.log(splitStr);
let revString = splitStr.reverse();
console.log(revString);
let complete = revString.join("");
console.log(complete);
// ["hello"]
// splitStr.split("")
// VM857:1 Uncaught TypeError: splitStr.split is not a function
// at <anonymous>:1:10
// (anonymous) @ VM857:1
splitStr.split("");