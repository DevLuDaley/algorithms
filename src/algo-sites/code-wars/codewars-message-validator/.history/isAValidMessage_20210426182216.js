// import React, { Component } from 'react';

// const ValidityCheck = () => {
    // constructor(props) {
        // super(props);
        // this.state = {  }
    // }

// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript
//3hey5hello2hi3hey5hello2hi

// let message = "3hey5hello2hi3hey5hello2hi"
let message = "3hey5hello2hi3"
const isANumber = (digit) => {
    if (!isNaN(digit))
    // if (digit >= "0" && digit <= "z" || digit >= "A" && digit <= "Z")
    return true
    else
    return false
}
const isALetter = (digit) => {
    if (digit >= "a" && digit <= "z" || digit >= "A" && digit <= "Z")
    return true
    else
    return false

}
const isAValidMessage = (message) => {
// console.log('🚀 ~ file: index.js ~ line 6 ~ isAValidMessage ~ message', message);
const splitMessage = message.split('')
// your code
// console.log('🚀 ~ file: index.js ~ line 11 ~ isAValidMessage ~ splitMessage', splitMessage);
    if (
        isANumber(message[0]) && isALetter(message[1] 
            // && message[0] == message[1] + (message[0] - 1)
            
        )
        // message[0] > 0
        // if (isALetter(message[0])
        // && message[1].includes(/[a-zA-Z]/)
    ) {
        // console.log("yup lu, it is greater than ZERO")
        // console.log(isALetter(message[1]))
        // console.log(message[1] + (message[0] - 1))
        console.log([message[1], message[(message[0] - 1)], message[(message[0])]])
        
        // let i
        let total = []
        // let messageLength = message.length
        for (let g of message)
        
        // for (i = 0; i < 5; i++) 
          {
              if (isANumber(g))
            // total += "The number is " + i + "<br>";
            // g + 1
            total.push(message[g])
          }
          
        //   for (
        //       i = 0,
        //       len = cars.length,
        //       text = "";
        //       i < len; i++
        //       ) {
        //     text += cars[i] + "<br>";
        //     }







        console.log(total)
        // console.log(message[0] == message[1] + (message[0] - 1))
        // console.log(message[0], ", index 0 of message,",  "is not a number? ",isNaN(message[0]))
        // console.log(!isNaN(message[1]))
        // return true
        // console.log("message[0],", message[0], ",is a ", typeof(message[0]))
        // console.log("message[0]", message[0],  "is not a number", message[0])
        // console.log("message[1],", message[1], ",is a ", typeof(message[1]))
        // true
    }
    // else { return console.log("Lu, this is less than ZERO")}
        //   return splitMessage
}
// isAValidMessage('3hey5hello2hi3') //true
// isAValidMessage('3hey5hello2hi5') //false
    // }
    // console.log("hi")

    // console.log(splitMessage)
    // isAValidMessage(message)
    // 3hey5hello2hi3

    // render() { 
        // return (  );
    // }

// console.log('🚀 ~ file: index.js ~ 13 ~ message', message);
// console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter(10));
// console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter("FJ"));
// console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter(1203003));
// console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter("120b3003"));
// console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetter("1203003b"));
// console.log('🚀 ~ file: index.js ~ line 30 ~ isALetter()', isALetdsasdsater("1203003b"));
// isALetter(a)
// 
// return{
//     isAValidMessage(message)
// }
// }
// }
// export default ValidityCheck;
export default isAValidMessage;
