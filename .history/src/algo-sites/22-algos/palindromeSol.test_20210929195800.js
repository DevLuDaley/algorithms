const palindromeSol = require("./palindromeSol");

describe("palindrome checker", () => {
    it("\'racecar\' is true", () => {
        expect(palindromeSol("racecars")).toEqual(true)
    })

 it("\'Cigar? Toss it in a can. It is so tragic\' is true", () => {
     expect(palindromeSol("Cigar? Toss it in a can. It is so tragic")).toEqual(true)
//   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 });
 it("\'sit ad est love\' is false", () => {
  expect(palindromeSol("sit ad est love")).toEqual(false);
 });
});

