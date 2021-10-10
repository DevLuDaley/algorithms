function l2TripleX(str) {
//   for (const i of str) {
  for (let i = 0; i < str.length; i += 1) {
    // console.log(i);
    console.log(str[i + 2]);
    str[i] === 'x' ? console.log(str[i + 2]) : null;
    // console.log(i + 2);
  }
}
// tripleX('abraxxxas');// → true
// tripleX('xoxotrololololololoxxx');// → false
// tripleX('softX kitty, warm kitty, xxxxx');// → true
// tripleX('softx kitty, warm kitty, xxxxx');// → false
l2TripleX('axxxas');

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'true'");
  console.log('=>', l2TripleX('axxxas'));

  //   console.log("Expecting: 'true'");
  //   console.log('=>', l2TripleX('abraxxxas'));

  //   console.log('Expecting: false');
  //   console.log('=>', l2TripleX('xoxotrololololololoxxx'));

  //   console.log('');

  //   console.log('Expecting: true');
  //   console.log('=>', l2TripleX('softX kitty, warm kitty, xxxxx'));

  //   console.log('Expecting: false');
  //   console.log('=>', l2TripleX(('softx kitty, warm kitty, xxxxx')));

  console.log('');
}

module.exports = l2TripleX;
