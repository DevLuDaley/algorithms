/* eslint-disable no-undef */
// function strCount(str, letter){
const fizzbuzz = require('./Fizzbuzz');

test('first', () => {
  expect(fizzbuzz([4, 10, 10, 9])).toEqual([10, 9]);
});

test('two', () => {
  expect(fizzbuzz([4, 10, 10, 9, 10])).toEqual([10, 9]);
});

test('Returns 15', () => {
  expect(fizzbuzz([15, 20, 20, 17])).toEqual([20, 17]);
});
