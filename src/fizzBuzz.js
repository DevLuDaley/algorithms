function fizzBuzz(n) {
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) {
      console.log(i, 'FizzBuzz');
    } else if (i % 5 == 0) {
      console.log(i, 'Buzz');
    } else if (i % 3 == 0) {
      console.log(i, 'Fizz');
    } else {
      console.log(i);
    }
  }
//   return fizzBuzz(30);
}
fizzBuzz(15);

module.exports = fizzBuzz;
