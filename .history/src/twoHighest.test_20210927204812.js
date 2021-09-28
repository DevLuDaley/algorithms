/* eslint-disable no-undef */
// function strCount(str, letter){
const twoHighest = require('./twoHighest');

test('first', () => {
  expect(twoHighest([4, 10, 10, 9])).toEqual([10, 9]);
});

test('two', () => {
  expect(twoHighest([10, 4, 10, 10, 9, 10, 10, 10])).toEqual([10, 9]);
});

test('Returns 17', () => {
  expect(twoHighest([15, 20, 20, 17])).toEqual([20, 17]);
});

test('Returns 32 20', () => {
  expect(twoHighest([15, 32, 20, 20, 17])).toEqual([32, 20]);
});
