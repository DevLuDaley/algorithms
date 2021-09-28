import React, { Component } from 'react';

class ValidityCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    // }

// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript
//3hey5hello2hi3hey5hello2hi

let message = "3hey5hello2hi3hey5hello2hi"

isALetter = (num) => {
    if (num >= "a" && num <= "z" || num >= "A" && num <= "Z")
    return true
    else
    return false

}sfdds
isAValidMessage = (message) => {
// console.log('🚀 ~ file: index.js ~ line 6 ~ isAValidMessage ~ message', message);
splitMessage = message.split('')
// your code
console.log('🚀 ~ file: index.js ~ line 11 ~ isAValidMessage ~ splitMessage', splitMessage);
if (message[0] > 0
    // && message[1].includes(/[a-zA-Z]/)
    ) {
    console.log("yup lu, it is greater than ZERO")
    console.log("message[0]", message[0],  "is a ", typeof(message[0]))
    // console.log("message[0]", message[0],  "is not a number", message[0])
    console.log("message[1]", message[1], "is a ", typeof(message[1]))
}

  return splitMessage
}

// console.log("hi")

// console.log(splitMessage)
isAValidMessage(message)

    // render() { 
        // return (  );
    // }

console.log('🚀 ~ file: index.js ~ 13 ~ message', message);
console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter(10));
console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter("FJ"));
console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter(1203003));
console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter("120b3003"));
console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter("1203003b"));
// isALetter(a)
// 
}
}
export default ValidityCheck;