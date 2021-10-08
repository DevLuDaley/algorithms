const binarySearch = function (nums, target) {
  const left = 0;
  const right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor(right - left) / 2;

    if (nums[mid] === target) {
        return mid
    } else if (nums[mid] < target){
        left = mid + 1
    }
    } else {
        right = mid - 1
    }
  }
  return -1
};

binarySearch(-1,0,3,5,9,12);
