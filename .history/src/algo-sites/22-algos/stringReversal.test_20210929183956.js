const stringReversal = require("./stringReversal");
const reverse1 = require("./stringReversal");
const reverse2 = require("./stringReversal");
const reverse3 = require("./stringReversal");
const palindrome = require("./stringReversal");

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
  expect(reverse1("Hello World!")).toEqual("!dlroW olleH");
  });
});

describe("reverse2", () => {
  it("Should reverse string", () => {
  expect(reverse2("Hello World!")).toEqual("!dlroW olleH");
  });
});

describe("reverse3", () => {
  it("Should reverse string", () => {
  expect(reverse3("Hello World!")).toEqual("!dlroW olleH");
  });
});