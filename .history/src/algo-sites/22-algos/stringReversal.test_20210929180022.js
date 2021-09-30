const stringReversal = require("./stringReversal");
const reverse1 = require("./reverse1");

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
describe("reverse1", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});