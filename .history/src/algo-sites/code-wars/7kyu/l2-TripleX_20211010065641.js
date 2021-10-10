function l2TripleX(str) {
  for (i of str) {
    console.log(i);
    console.log(i + 1);
    console.log(i + 2);
  }
}
// tripleX('abraxxxas');// → true
// tripleX('xoxotrololololololoxxx');// → false
// tripleX('softX kitty, warm kitty, xxxxx');// → true
// tripleX('softx kitty, warm kitty, xxxxx');// → false

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'true'");
  console.log('=>', l2TripleX('abraxxxas'));

  console.log('Expecting: false');
  console.log('=>', l2TripleX('xoxotrololololololoxxx'));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', l2TripleX('softX kitty, warm kitty, xxxxx'));

  console.log('Expecting: false');
  console.log('=>', l2TripleX(('softx kitty, warm kitty, xxxxx')));

  console.log('');
}

module.exports = l2TripleX;
