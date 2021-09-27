/* eslint-disable no-undef */
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
