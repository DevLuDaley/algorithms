function l2TripleX(str) {
  for (i of str) {
    console.log(i);
  }
}
// tripleX('abraxxxas');// → true
// tripleX('xoxotrololololololoxxx');// → false
// tripleX('softX kitty, warm kitty, xxxxx');// → true
// tripleX('softx kitty, warm kitty, xxxxx');// → false

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: false');
  console.log('=>', l2TripleX('xoxotrololololololoxxx'));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', l2TripleX(['softX kitty, warm kitty, xxxxx']));

  console.log('');

  console.log("Expecting: 'lily'");
  console.log('=>', l2TripleX(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = l2TripleX;
