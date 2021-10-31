function bubbleSort(arr) {
  // Outer pass
  for (let i = 0; i < arr.length; i++) {
    // Inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Value comparison using ascending order

      if (arr[j + 1] < arr[j]) {
        // Swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([5, 3, 8, 4, 6]));
bubbleSort([5, 3, 8, 4, 6]);

const mySort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(array.length - i - 1);
      const element = array[j];
      if (array[j + 1] < array[j]) {
        console.log(array);
      }
    }
  }
};

mySort([5, 3, 8, 4, 6]);
