const palindromeSol = require("./palindromeSol");

describe("palindrome", () => {
    it("should confirm palindrome as true", () => {
        expect(palindromeSol("racecar")).toEqual(true)
    })

 it("Should return true", () => {
     expect(palindromeSol("Cigar? Toss it in a can. It is so tragic")).toEqual(true)
//   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 });
 it("Should return false", () => {
  expect(palindromeSol("sit ad est love")).toEqual(false);
 });
});

