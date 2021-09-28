/* eslint-disable no-console */
function twoHighest(arr) {
  // !order array in asc order
  const sorted = arr.sort((a, b) => a - b);

  // ! check and confirm that the last two elements are not the same value

  //! pop off last element in arr[]

  //! check if first element in box[] has the same value as the last element in arr[]

  const box = [];
  const last = sorted.pop();
  box.push(last);
  console.log(last);

  const sortedChecker = (arr) => {
    if (box[0] === arr[arr.length - 1]) {
      arr.pop();
      sortedChecker(arr);
    } else { box.push(arr[arr.length - 1]); }
  };
  sortedChecker(sorted);

  // !push to a new array
  // !return last 2 values in array
  console.log(box);
  return box;
}

twoHighest([10, 4, 10, 10, 9, 10]);

module.exports = twoHighest;
