// Iterative function to implement Binary Search
const iterativeFunction = function (arr, x) {
  let start = 0; let
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    const mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;

    // Else look in left or right half accordingly
    if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
iterativeFunction([1, 2, 3, 4, 5,, 7, 8, 9, 10, 22, 33, 34, 35, 38, 39, 40, 41, 45, 56, 99, 123], 39);
