function l2TripleX(str) {
//   for (const i of str) {
  const x = 'x';
  //   const x3 = 'xxx';
  for (let i = 0; i < str.length; i += 1) {
    // if (str[i] === x && str[i + 1] === x && str[i + 2] === x) {
    if (str[i] === x) {
    //   console.log(str[i], i);
      // if (str.includes(x3){
      //   return true;
      if (str[i + 1] === x) {
        if (str[i + 2] === x) {
        //   console.log(str[i], i);
          return true;
        }
      }
    }
    return false;
  }
}
// tripleX('abraxxxas');// → true
// tripleX('xoxotrololololololoxxx');// → false
// tripleX('softX kitty, warm kitty, xxxxx');// → true
// tripleX('softx kitty, warm kitty, xxxxx');// → false
// l2TripleX('axxxas');
// l2TripleX('soft kitty, warm kitty, xxxxx');
l2TripleX('soft kitty, warm kitty, xxxxx');

if (require.main === module) {
  // add your own tests in here
//   console.log("From axxxas Expecting: 'true'");
//   console.log('=>', l2TripleX('axxxas'));

  //   console.log("From abraxxxas Expecting: 'true'");
  //   console.log('=>', l2TripleX('abraxxxas'));

  //   console.log('From xoxotrololololololoxxx Expecting: false');
  //   console.log('=>', l2TripleX('xoxotrololololololoxxx'));

  //   console.log('');

  console.log('From softX kitty, warm kitty, xxxxx Expecting: true');
  console.log('=>', l2TripleX('softX kitty, warm kitty, xxxxx'));

  //   console.log('From softx kitty, warm kitty, xxxxx Expecting: false');
  //   console.log('=>', l2TripleX(('softx kitty, warm kitty, xxxxx')));

  console.log('');
}

module.exports = l2TripleX;
