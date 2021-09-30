const myFunction = require("./palindrome");
const palindrome = require("./palindrome");
const palindromer = require("./palindrome");
// const stringReversal = require("./palindrome");


describe("palindromer", () => {
    it("should confirm palindrome", () => {
        expect(palindromer("racecar")).toEqual(true)
    })
        
})
describe("palindrome", () => {
    it("should confirm palindrome", () => {
        expect(palindrome("racecar")).toEqual(true)
    })
        
})

describe("myFunction", () => {
    it("should multiply", () => {
        expect(myFunction(2,3)).toEqual(6)
    })
        
})
// describe("String Reversal", () => {
//   it("Should reverse string", () => {
//   //   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//     expect(stringReversal("Hello World!")).toEqual("!dlroW olleH");
//   });
//   //   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//   it("Should reverse string again", () => {
//     expect(stringReversal("Big Code")).toEqual("edoC giB");
//   });
// });



// describe("Palindrome", () => {
//   it("confim palindrome", () => {
//     expect(palindrome("Hello World!")).toEqual(true);
//   });
// })

