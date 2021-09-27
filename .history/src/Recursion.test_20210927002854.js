// function strCount(str, letter){
// const { factorialI } = require('./Recursion');
const { factorialI, factorialR } = require('./Recursion');
// const { factorialI, factorialR, countDown } = require('./Recursion');
const factorialId = factorialI;
const factorialRec = factorialR;
// const factorialI = require('./Recursion');
// const factorialR = require('./Recursion');
// const twoHighest = require('./twoHighest');

test('i1', () => {
  expect(factorialId(5)).toEqual(120);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

test('r1', () => {
  expect(factorialRec(5)).toEqual(12);
  // expect(strCount('lllcdc', 'k')).toBe(0);
});

// test('countdown', () => {
//   expect(countDown(5)).toEqual(99);
//   // expect(strCount('lllcdc', 'k')).toBe(0);
// });
