const mySet = new Set();
console.log(mySet);
mySet.add(5);
mySet.add(5);
console.log(mySet.add(10));
console.log(mySet.add(115));
console.log(mySet.add(39).add(45).clear());
console.log(mySet.add(24));
console.log(mySet.add(4));
console.log(mySet.add(5));
console.log(mySet);

const findFirstDupe = (arr) => {
// const arr = [2, 1, 3, 3, 2];
// const newSet = new Set([2, 1, 3, 3, 2]);
  const newSet = new Set(arr);

  //   for (const num of arr) {
  for (let i = 0; i < arr.length; i++) {
    if (newSet.has(arr[i])) {
      console.log(arr[i]);
      return arr[i];
    }
    newSet.add(arr[i]);
  }
  console.log(-1);
  return -1;
  // console.log(newSet);
};
findFirstDupe([2, 1, 3, 3, 2]);
// findFirstDupe([2, 1, 3, 3, 2]);

function findFirstDuplicate(arr) {
// Javascript program to find first
// repeating element in arr[]
  const elementSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (elementSet.has(arr[i])) return arr[i];
    elementSet.add(arr[i]);
  }

  return -1;
  // return "No duplicates here!";
}

findFirstDuplicte([2, 1, 3, 3, 2]);
