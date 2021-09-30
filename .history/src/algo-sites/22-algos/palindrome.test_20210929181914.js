const palindrome = require("./palindrome");

// describe('palindrome', () => {
//     test('should confirm palindrome', () => {
//         expect(palindrome("racecar")).toEqual(true)
//     })
        
// })


describe("String Reversal", () => {
  it("Should reverse string", () => {
  //   assert.equal(reverse("Hello World!"), "!dlroW olleH");
    expect(palindrome("Hello World!")).toEqual(true);
  });