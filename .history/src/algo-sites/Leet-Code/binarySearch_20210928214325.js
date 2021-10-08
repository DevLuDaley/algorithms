const binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // console.log(mid);

    if (nums[mid] == target) {
    //   console.log(mid);
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    //   console.log(left);
    } else {
      right = mid - 1;
    //   console.log(right);
    }
  }
  console.log(-1);
  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
// binarySearch([-1, 0, 3, 5, 9, 12], 5);
