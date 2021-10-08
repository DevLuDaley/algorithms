// js
const findFirstDupe = require('./sets');

test('first', () => {
  expect(findFirstDupe([2, 1, 3, 3, 2])).toEqual('3');
});
