const palindrome = require("./palindrome");

describe("palindrome", () => {
    it("should confirm palindrome", () => {
        expect(palindrome("racecar")).toEqual(true)
    })
        
})

