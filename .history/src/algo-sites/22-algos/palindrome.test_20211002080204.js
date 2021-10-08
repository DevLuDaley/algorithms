const palindrome = require('./palindrome');

describe('palindrome', () => {
  it('should confirm palindrome', () => {
    expect(palindrome('racecar')).toEqual(true);
  });

  // it('Should return true', () => {
  //   expect(palindrome('Cigar? Toss it in a can. It is so tragic')).toEqual(true);
  //   //   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
  // });
  it('Should return false', () => {
    expect(palindrome('sit ad est love')).toEqual(false);
  });
});
