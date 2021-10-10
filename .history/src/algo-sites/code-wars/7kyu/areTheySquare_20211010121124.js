const isSquare = function (arr) {
//   let element;
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    //   const hasValidSqrt = (currentValue) => Math.sqrt(currentValue) - Math.floor(currentValue) === 0;
    //   return arr.every(hasValidSqrt);

    const element = arr[i];
    // console.log(Math.sqrt(element));
    // const result = (element - Math.floor(element)) !== 0;

    const result = (Math.sqrt(element) - Math.floor(Math.sqrt(element))) === 0;
    // Math.sqrt(element) - Math.floor(element);
    // if (result === true) {
    if (result === false) {
      counter += 1;
      //   console.log(element);
      //   if (counter === arr.length) {
      //   console.log(element);
      //   return true;
      return false;
    //   }
    }
    // return true;

    // return false;
  }
};

// isSquare([1, 4, 9, 16]); // true
// isSquare([1, 4, 9, 16, 25, 36]); // true
// isSquare([3, 4, 7, 9]);

isSquare([1, 4, 9, 16, 25, 36]);// , true);
isSquare([1, 2, 3, 4, 5, 6]);// , false);
// isSquare([1, 2, 3, 4, 5, 6]);// , false);
// isSquare([]);// , undefined);
// isSquare([1, 2, 4, 15]);// , false);

if (require.main === module) {
  // add your own tests in here
  console.log("From [1, 2, 3, 4, 5, 6] Expecting: 'false'");
  console.log('=>', isSquare([1, 2, 3, 4, 5, 6]));

  //   console.log("From abraxxxas Expecting: 'true'");
  //   console.log('=>', is_square('abraxxxas'));

  //   console.log('From xoxotrololololololoxxx Expecting: false');
  //   console.log('=>', is_square('xoxotrololololololoxxx'));

  console.log('From [3, 4, 7, 9] Expecting: false');
  console.log('=>', isSquare([3, 4, 7, 9]));

//   console.log('');
}

module.exports = isSquare;
