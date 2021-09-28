/*
problems_page = https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#EDITOR
problem# = 1
solution_page = https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php
https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/

[] Convert the number to a string
[] Split the String into an Array
[] Reverse the Array
[] Join it back into a string
[] Parse the input value into a floating point number:
[] Multiply it by the sign of the original number — to maintain the negative value.
*/

//! [x] convert number to a string
// assign number to a variable
let num = 12345

// clg confirm typeof
// console.log(typeof(num)) //number

// create/assign variable to convert num to string
let numString = num.toString()

// clg confirm value && typeof
// console.log(numString) //12345
// console.log(typeof(numString)) //string

//! [x] Split the String into an Array
let stringArr = numString.split("")
// console.log(stringArr) //[ '1', '2', '3', '4', '5' ]
// console.log(typeof(stringArr)) //[ '1', '2', '3', '4', '5' ] //object

//! [x] Reverse the Array
let revStringArr = stringArr.reverse()
// console.log(revStringArr) //[ '5', '4', '3', '2', '1' ]

//! [x] Join it back into a string
let rejoinedString = revStringArr.join("")
// console.log(rejoinedString) //54321
// console.log(typeof(rejoinedString)) //string

//! [x] Parse the input value into a floating point number:
let parsedFpNum = parseFloat(rejoinedString)
// console.log(parsedFpNum) //54321
// console.log(typeof(parsedFpNum)) //number

//! [x] Multiply it by the sign of the original number — to maintain the negative value.
// finalState = parsedFpNum * Math.sign(parsedFpNum)
// console.log(Math.sign(parsedFpNum)) //1
// console.log(typeof(Math.sign(parsedFpNum))) //number
// console.log(typeof(finalState)) //number
// console.log(finalState) //54321

function reverseNumber(n){
    let numString = n.toString()
    // console.log(numString) //123
    //! [x] Split the String into an Array
    let stringArr = numString.split("")

    //! [x] Reverse the Array
    let revStringArr = stringArr.reverse()
    // console.log(revStringArr) //[ '5', '4', '3', '2', '1' ]

    //! [x] Join it back into a string
    let rejoinedString = revStringArr.join("")
    // console.log(rejoinedString) //54321
    // console.log(typeof(rejoinedString)) //string

    //! [x] Parse the input value into a floating point number:
    let parsedFpNum = parseFloat(rejoinedString)
    // console.log(parsedFpNum) //54321
    // console.log(typeof(parsedFpNum)) //number

    //! [x] Multiply it by the sign of the original number — to maintain the negative value.
    finalState = parsedFpNum * Math.sign(parsedFpNum)
    // console.log(Math.sign(parsedFpNum)) //1
    // console.log(typeof(Math.sign(parsedFpNum))) //number
    // console.log(typeof(finalState))
    // console.log(finalState) //54321
    // console.log(`The initial number was ${n}. The reversed number is ${finalState}`)
    console.log(`The initial number was "${n}". The now reversed number is "${finalState}"`)
}

reverseNumber(123) //The initial number was 123. The reversed number is 321
reverseNumber(-123) //The initial number was -123. The reversed number is 321
reverseNumber(00007194) //The initial number was 7194. The reversed number is 4917
reverseNumber(7194) //The initial number was 7194. The reversed number is 4917


/*
function reverseNumber(n){
    let numString = n.toString()
    //! [x] Split the String into an Array
    let stringArr = numString.split("")

    //! [x] Reverse the Array
    let revStringArr = stringArr.reverse()
    //! [x] Join it back into a string
    let rejoinedString = revStringArr.join("")
    //! [x] Parse the input value into a floating point number:
    let parsedFpNum = parseFloat(rejoinedString)
    //! [x] Multiply it by the sign of the original number — to maintain the negative value.
    finalState = parsedFpNum * Math.sign(parsedFpNum)
    console.log(`The initial number was "${n}". The now reversed number is "${finalState}"`)
}
*/

function reverse_a_number(n)
{
	n = n + "";
    let best = n.split("").reverse().join("");
    // return n.split("").reverse().join("");
    console.log(best)
}

reverse_a_number(35)
reverse_a_number(915)
// ! https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php