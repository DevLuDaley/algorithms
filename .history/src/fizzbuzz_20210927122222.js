function fizzBuzz(n) {
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }

//   return n;
}

fizzBuzz(15);
module.exports = fizzBuzz;
