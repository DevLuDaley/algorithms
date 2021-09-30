const palindromeSol = require("./palindromeSol");

describe("palindrome checker", () => {
    it("should confirm racscar as true", () => {
        expect(palindromeSol("racecar")).toEqual(true)
    })

 it("Should confirm \'Cigar? Toss it in a can. It is so tragic\' as true", () => {
     expect(palindromeSol("Cigar? Toss it in a can. It is so tragic")).toEqual(true)
//   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 });
 it("Should confrim \'sit ad est love\' as false", () => {
  expect(palindromeSol("sit ad est love")).toEqual(false);
 });
});

