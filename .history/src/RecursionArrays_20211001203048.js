function rangeOfNumbers(startNum, endNum) {
// return [];
  if (startNum === endNum) {
    return [startNum];
  }
  const numbers = rangeOfNumbers(startNum, endNum - 1);
  console.log(`Numbers variable before each endNum push NUMBERS = ${numbers}`);
  numbers.push(endNum);
  console.log(`Numbers after push ${numbers}`);
  return numbers;
}
rangeOfNumbers(1, 3);

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(5);

// const plunker = (num) => {
//     if (num > 5){
//         console.log(num + " is a plunker!");
//     } else {
//         console.log(num + " is not a plunker. Sorry buddy.");
//     }
// }
// plunker(10)

// const stringy = (word) => {}

// look_for_key = function(box) {
//      for (item in box) {
//          if (item.is_a_key()) {
//              print("found the key")
//          } else {
//              look_for_key(item)
//          }
//      }
//  }
