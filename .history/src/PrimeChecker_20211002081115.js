function PrimeChecker(num) {
  // ? how do we confirm if a number is prime or not?
  // ! unless the num == 2, the num is not divisible (to a whole number) by 2 (aka it is not an even num)
  // ! check if num is divisible by 3, 5, 7, 11

  // + confirm the input is a num or convert it to one.
  // + confirm the input is a num or convert it to one.
  const primeBox = [];
  const notPrimeBox = [];
  const count = 100;
  let i = 0;

  // num.forEach(e =>
  while (i < count) {
    if (i % 2 == 0 && i !== 2 || i == 1) {
      notPrimeBox.push(i);
      // console.log(notPrimeBox)
      //   console.log(e, "=> is not prime")
    } else if (i > 3 && i % 3 == 0 || i > 5 && i % 5 == 0 || i > 7 && i % 7 == 0 || i % 9 == 0) {
      // console.log(e, "=> is a prime number")
      notPrimeBox.push(i);
      // console.log(primeBox)
      // return primeBox
    } else {
      primeBox.push(i);
    }
    i++;
  }
  // console.log("notPrimeBox => ", notPrimeBox)
  console.log('primeBox => ', primeBox);
  // +     primeBox =>  [
  // +    2,  3,  5,  7, 11, 13, 17, 19,
  // +   23, 29, 31, 37, 41, 43, 47, 53,
  // +   59, 61, 67, 71, 73, 79, 83, 89,
  // +   97
  // + ]
  // console.log("primeBox => ", primeBox.includes(313))
  // );
}

// PrimeChecker([2,3,4,5])
// export default PrimeChecker
