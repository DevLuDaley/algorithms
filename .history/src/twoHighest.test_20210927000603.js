// function strCount(str, letter){
const twoHighest = require('./twoHighest');

test('first', () => {
  expect(twoHighest([4, 10, 10, 9])).toEqual([10, 9]);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

test('two', () => {
  expect(twoHighest([4, 10, 10, 9, 10])).toEqual([10, 9]);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

test('Returns 15', () => {
  expect(twoHighest([15, 20, 20, 17])).toEqual([20, 17]);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

// test("Returns 3", () => {
//     expect(strCount("Hellothere", "e")).toEqual(3);
//     // expect(strCount('lllcdc', 'k')).toBe(0);
// });

// test("Returns 1", () => {
//     expect(strCount('fgakkiaekjbfcbikgigzkzk', "e")).toEqual(1);
//     // expect(strCount('lllcdc', 'k')).toBe(0);
// });

// test("hello 1", () => {
//     expect(strCount('Hello', "o")).toEqual(1);
//     // expect(strCount('lllcdc', 'k')).toBe(0);
// });

// test("hello 2", () => {
//     expect(strCount('Hello', "l")).toEqual(2);
//     // expect(strCount('lllcdc', 'k')).toBe(0);
// });

// test("hello 0", () => {
//     expect(strCount('', "z")).toEqual(0);
//     // expect(strCount('lllcdc', 'k')).toBe(0);
// });

// test("helloll 4", () => {
//     expect(strCount('helloll', "l")).toEqual(4);
//     // expect(strCount('lllcdc', 'k')).toBe(0);
// });

// 'Hello', 'o', 1;
// 'Hello', 'l', 2;
// '', 'z', 0;
