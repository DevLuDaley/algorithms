const palindrome = require("./palindrome");

describe("palindrome", () => {
    it("should confirm palindrome", () => {
        expect(palindrome("racecar")).toEqual(true)
    })
        
})
describe("String Reversal", () => {
  it("Should reverse string", () => {
  //   assert.equal(reverse("Hello World!"), "!dlroW olleH");
    expect(stringReversal("Hello World!")).toEqual("!dlroW olleH");
  });
  //   assert.equal(reverse("Hello World!"), "!dlroW olleH");
  it("Should reverse string again", () => {
    expect(stringReversal("Big Code")).toEqual("edoC giB");
  });
});



// describe("Palindrome", () => {
//   it("confim palindrome", () => {
//     expect(palindrome("Hello World!")).toEqual(true);
//   });
// })
