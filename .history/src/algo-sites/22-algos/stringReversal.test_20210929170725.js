const stringReversal = require("./stringReversal");

describe("String Reversal", () => {
 it("Should reverse string", () => {
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
  expect(stringReversal("Hello World!")).toEqual("!dlroW olleHH");
 });
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
it("Should reverse string again", () => {
  expect(stringReversal("Big Code")).toEqual("edoC giB");
});
});
// describe("String Reversal", () => {
//  it("Should reverse string", () => {
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//  });
// });