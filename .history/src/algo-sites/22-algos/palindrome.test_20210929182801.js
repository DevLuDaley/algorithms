const palindrome = require("./palindrome");

describe('palindrome', () => {
    test('should confirm palindrome', () => {
        expect(palindrome("racecar")).toEqual(true)
    })
        
})


// describe("Palindrome", () => {
//   it("confim palindrome", () => {
//     expect(palindrome("Hello World!")).toEqual(true);
//   });
// })

