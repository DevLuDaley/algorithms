const isSquare = function (arr) {
//   let element;
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    // console.log(Math.sqrt(element));
    // const result = (element - Math.floor(element)) !== 0;
    const result = (Math.sqrt(element) - Math.floor(element)) === 0;
    if (result === true) {
    //   console.log(element);
      return true;
    }
    return false;
  }
};

isSquare([1, 4, 9, 16]);
isSquare([3, 4, 7, 9]);

Test.assertEquals(isSquare([1, 4, 9, 16, 25, 36]), true);
Test.assertEquals(isSquare([1, 2, 3, 4, 5, 6]), false);
Test.assertEquals(isSquare([]), undefined);
Test.assertEquals(isSquare([1, 2, 4, 15]), false);

if (require.main === module) {
  // add your own tests in here
//   console.log("From axxxas Expecting: 'true'");
//   console.log('=>', is_square('axxxas'));

  //   console.log("From abraxxxas Expecting: 'true'");
  //   console.log('=>', is_square('abraxxxas'));

  //   console.log('From xoxotrololololololoxxx Expecting: false');
  //   console.log('=>', is_square('xoxotrololololololoxxx'));

  //   console.log('');

  console.log([1, 4, 9, 16]);
  //   console.log();
  //   console.log();

  console.log('From [3, 4, 7, 9] Expecting: false');
  console.log('=>', isSquare([3, 4, 7, 9]));

  console.log('');
}

module.exports = isSquare;