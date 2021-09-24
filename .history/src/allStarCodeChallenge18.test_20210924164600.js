// function strCount(str, letter){
const strCount = require("./allStarCodeChallenge18");
test("Returns 0", () => {
    expect(strCount('lllcdc', 'k')).toEqual(0);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});

test("Returns 3", () => {
    expect(strCount("Hellothere", "e")).toEqual(3);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});

test("Returns 1", () => {
    expect(strCount('fgakkiaekjbfcbikgigzkzk', "e")).toEqual(1);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});

test("hello 1", () => {
    expect(strCount('Hello', "o")).toEqual(1);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});

test("hello 2", () => {
    expect(strCount('Hello', "l")).toEqual(2);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});

test("hello 0", () => {
    expect(strCount('', "z")).toEqual(0);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});

test("helloll 4", () => {
    expect(strCount('', "l")).toEqual(4);
    // expect(strCount('lllcdc', 'k')).toBe(0);
});



// 'Hello', 'o', 1;
// 'Hello', 'l', 2;
// '', 'z', 0;