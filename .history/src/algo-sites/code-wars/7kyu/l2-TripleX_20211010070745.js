function l2TripleX(str) {
//   for (const i of str) {
  const x = 'x';
  for (let i = 0; i < str.length; i += 1) {
    // console.log(i);
    // console.log(str[i + 2]);
    if (str[i] === x && str[i + 1] == x && str[i + 2] == x) {
      return true;
    }

    return false;
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
  console.log("From axxxas Expecting: 'true'");
  console.log('=>', l2TripleX('axxxas'));

  console.log("Expecting: 'true'");
  console.log('=>', l2TripleX('abraxxxas'));

  console.log('Expecting: false');
  console.log('=>', l2TripleX('xoxotrololololololoxxx'));

  //   console.log('');

  console.log('Expecting: true');
  console.log('=>', l2TripleX('softX kitty, warm kitty, xxxxx'));

  console.log('Expecting: false');
  console.log('=>', l2TripleX(('softx kitty, warm kitty, xxxxx')));

  console.log('');
}

module.exports = l2TripleX;
