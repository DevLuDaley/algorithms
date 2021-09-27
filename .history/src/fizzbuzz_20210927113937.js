function fizzBuzz(n) {
  console.log(n);
  // if
  //   i = n;
  for (let i = 1; i < n; i++) {
    if (i % 15 == 0)console.log('fizzbuzz');
  }

  return n;
}

fizzBuzz(10);
module.exports = fizzBuzz;
