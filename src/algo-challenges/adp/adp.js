const dataList1 = [10, 30, 46, 1, 9, 90, 20, -10, -20, -1, 200];
const dataList2 = [10, 30, 46, 1, 9, 90, 20, -10, -20, -1, 200, -10];
const dataList3 = [10, 30, 46, 1, 9, 90, 20, -10, -20, -1, 200, -20];
const dataList4 = [10, 30, 46, 1, 90, 20, 10, 20, 1, 200];

const sorter = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      console.log(list.length - i - 1);
      if (list[j + 1] < list[j]) {
        list[j + 1], list[j] = list[j], list[j + 1];
      //  [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return list;
};

// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < (arr.length - i - 1); j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  // console.log(arr);
  return arr;
}
bblSort(dataList1);
// };
sorter(dataList1);
const get2ndSmallest = (dList) => {
  dList.sort((a, b) => a - b);
  const secondMin = dList[1];
  // console.log(secondMin);

  return secondMin;
  // return value2nd;
};

/*

*/

console.log(get2ndSmallest(dataList1)); // -10
// console.log(get2ndSmallest(dataList2)); //
// console.log(get2ndSmallest(dataList3));
// console.log(get2ndSmallest(dataList4));
