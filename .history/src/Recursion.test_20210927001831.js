// function strCount(str, letter){
// const { factorialI } = require('./Recursion');
const factorialI = require('./Recursion');
const factorialR = require('./Recursion');
// const twoHighest = require('./twoHighest');

test('I1', () => {
  expect(factorialI(5)).toEqual(120);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

test('r1', () => {
  expect(factorialR(5)).toEqual(120);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});
