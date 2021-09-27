// function countDown(fromNumber) {
//   console.log(fromNumber);

//   const nextNumber = fromNumber - 1;

//   if (nextNumber > 0) {
//     countDown(nextNumber);
//   }
// }
// countDown(5);

// // const plunker = (num) => {
// //     if (num > 5){
// //         console.log(num + " is a plunker!");
// //     } else {
// //         console.log(num + " is not a plunker. Sorry buddy.");
// //     }
// // }
// // plunker(10)

// // const stringy = (word) => {}

// // look_for_key = function(box) {
// //      for (item in box) {
// //          if (item.is_a_key()) {
// //              print("found the key")
// //          } else {
// //              look_for_key(item)
// //          }
// //      }
// //  }

// // Iterative Factorial Example
// function factorialI(number) {
//   let result = 1;

//   for (let i = 1; i <= number; i++) {
//     result *= i;
//   }
//   console.log(result);
//   return result;
// }
// factorialI(5);

// function factorialR(number) {
//   if (number === 1) {
//     return 1;
//   }
//   console.log(number * factorialR(number - 1));
//   return number * factorialR(number - 1);
// }

// factorialR(5);

const twoHighest = require('./twoHighest');

test('first', () => {
  expect(twoHighest([4, 10, 10, 9])).toEqual([10, 9]);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

test('two', () => {
  expect(twoHighest([4, 10, 10, 9, 10])).toEqual([10, 9]);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

test('Returns 15', () => {
  expect(twoHighest([15, 20, 20, 17])).toEqual([20, 17]);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});
