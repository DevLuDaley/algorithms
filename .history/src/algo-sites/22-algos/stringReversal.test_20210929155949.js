const stringReversal = require("./stringReversal.test");

describe("String Reversal", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});
// describe("String Reversal", () => {
//  it("Should reverse string", () => {
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//  });
// });