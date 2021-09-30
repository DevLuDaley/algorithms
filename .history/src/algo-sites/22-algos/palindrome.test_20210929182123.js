const palindrome = require("./palindrome");

// describe('palindrome', () => {
//     test('should confirm palindrome', () => {
//         expect(palindrome("racecar")).toEqual(true)
//     })
        
// })


describe("Palindrome", () => {
  it("confim palindrome", () => {
  //   assert.equal(reverse("Hello World!"), "!dlroW olleH");
    expect(palindrome("Hello World!")).toEqual(true);
    
  });
}