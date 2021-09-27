// function recursion() {
function countDown(fromNumber) {
  console.log(fromNumber);

  const nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(5);

// Iterative Factorial Example
exports.factorialI = function factorialI(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(result);
  return result;
};
factorialI(5);

function factorialR(number) {
  if (number === 1) {
    return 1;
  }
  console.log(number * factorialR(number - 1));
  return number * factorialR(number - 1);
}

factorialR(5);
// }
// module.exports = recursion;

// exports.factorialI = function() {};
// exports.factorialR = function() {};
