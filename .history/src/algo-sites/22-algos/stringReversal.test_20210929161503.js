const stringReversal = require("./stringReversal");

describe("String Reversal", () => {
 it("Should reverse string", () => {
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
  expect(stringReversal("Hello World!")).toEqual("!dlroW olleH");
 });
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//   expect(stringReversal("Big Code")).toEqual("edoC gib");
// });
// describe("String Reversal", () => {
//  it("Should reverse string", () => {
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//  });
// });