const isSquare = function (arr) {
  // Your code here
};

is_square([1, 4, 9, 16]);

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
  console.log();
  console.log();

  console.log('From [3, 4, 7, 9] Expecting: false');
  console.log('=>', isSquare([3, 4, 7, 9]));

  console.log('');
}

module.exports = is_square;
