function fizzBuzz(n) {
  for (let i = 1; i < n; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 == 0) {
      console.log('buzz');
    //   return 'buzz';
    } else if (i % 3 == 0) {
      console.log('fizz');
      // return 'fizz';
    } else {
      console.log(i);
      return i;
    }
  }

//   return n;
}

fizzBuzz(15);
module.exports = fizzBuzz;
