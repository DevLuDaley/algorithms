// js
const findFirstDupe = require('./sets');

test('[2, 1, 3, 3, 2] should return 3', () => {
  expect(findFirstDupe([2, 1, 3, 3, 2])).toEqual(3);
});

test('[2, 1, 3, 5, 9, 24, 43, 39, 9, 3, 2] should return 9', () => {
  expect(findFirstDupe([2, 1, 3, 5, 9, 24, 43, 39, 9, 3, 2])).toEqual(9);
});
