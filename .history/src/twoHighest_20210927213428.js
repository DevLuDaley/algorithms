/* eslint-disable no-console */
function twoHighest(arr) {
  // order array in asc order
  const sorted = arr.sort((a, b) => a - b);

  // create a container/box to return the highest 2 numbers
  const box = [];

  // pop off last element in arr[]
  const last = sorted.pop();

  // check if first element in box[] has the same value as the last element in arr[]

  // confirm that the last two elements in arr[] are not the same value

  // remove the last element in arr[] and push it into box
  box.push(last);

  const sortedChecker = (sortedArr) => {
    // if the first element in box has the same value as the last element in arr[]
    if (box[0] === sortedArr[sortedArr.length - 1]) {
      // remove the last element in arr[]
      sortedArr.pop();
      // start over sortedChecking the sortedArr
      sortedChecker(sortedArr);
    } else {
      // push the leas element in arr[] into box
      box.push(sortedArr[sortedArr.length - 1]);
    }
  };
  sortedChecker(sorted);

  // return the 2 highest values
  console.log(box);
  return box;
}

twoHighest([10, 4, 10, 10, 9, 10]);

module.exports = twoHighest;
