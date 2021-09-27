function fizzBuzz(n) {
  console.log(n);
  // if
  //   i = n;
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log('fizzbuzz');
    //   return 'fizzbuzz';
    }
    if (i % 5 == 0) {
      console.log('buzz');
      return 'buzz';
    }
    if (i % 3 == 0) {
      console.log('fizz');
      return 'fizz';
    }
    console.log(i);
    return i;
  }

  return n;
}

fizzBuzz(15);
module.exports = fizzBuzz;
