function countDown(fromNumber) {
  console.log(fromNumber);

  const nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(5);

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

// Iterative Factorial Example
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
