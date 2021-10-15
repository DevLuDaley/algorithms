// function processData(input) {
// // Enter your code here
//   var input = input.split('\n');
//   const numLines = parseInt(input[0]);
//   const phoneBook = new Map();
//   for (let i = 1; i <= numLines; i++) {
//     // 1,2; 3,4; 5,6
//     const inputValues = input[i].split(' ');
//     phoneBook.set(inputValues[0], inputValues[1]);
//   }
//   for (let j = numLines + 1; j < input.length; j++) {
//     const values = input[j].split(' ');
//     if (phoneBook.has(values[0])) {
//       console.log(`${values[0]}=${phoneBook.get(values[0])}`);
//     } else console.log('Not found');
//   }
// }

function processData(input) {
  // Enter your code here
  var input = input.split('\n');
  const numLines = input[0];
  const phoneBook = {};

  for (let i = 1; i < numLines * 2; i += 2) {
    // 1,2; 3,4; 5,6
    phoneBook[input[i]] = input[i + 1];
  }

  for (let j = numLines * 2 + 1; j < input.length; j++) {
    if (input[j] in phoneBook) {
      console.log(`${input[j]}=${phoneBook[input[j]]}`);
      return `${input[j]}=${phoneBook[input[j]]}`
    }
    else {
      console.log('Not found');}
      return'Not found'
  }
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });
/*
n = 3
n_lines = [sam 99912222, tom 11122222, harry 12299933]
queries = [sam, edward, harry]
*/

const input = '3 sam 99912222 tom 11122222 harry 1229993 3sam edward harry';

// const input2 = [
// 3,
// [sam 99912222, tom 11122222, harry 12299933],
// [sam, edward, harry]]

processData(input);
