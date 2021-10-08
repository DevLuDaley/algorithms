const mySet = new Set();
// console.log(mySet);
// mySet.add(5);
mySet.add(5);
// console.log(mySet.add(10));
// console.log(mySet.add(115));
// console.log(mySet.add(39).add(45).clear());
// console.log(mySet.add(24));
// console.log(mySet.add(4));
// console.log(mySet.add(5));
// console.log(mySet);

const findFirstDupe = (arr) => {
// const arr = [2, 1, 3, 3, 2];
// const newSet = new Set([2, 1, 3, 3, 2]);
  const newSet = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    //   for (const i of arr) {
    if (newSet.has(arr[i])) {
      return arr[i];
    }
    newSet.add(arr[i]);
  }
  return -1;
};
findFirstDupe([2, 1, 3, 3, 2]);

function findFirstDuplicate(arr) {
// Javascript program to find first
// repeating element in arr[]
  const elementSet = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    if (elementSet.has(arr[i])) {
      return arr[i];
    }
    // console.log(arr[i]);
    elementSet.add(arr[i]);
  }

  return -1;
  // return "No duplicates here!";
}

findFirstDuplicate([2, 1, 3, 3, 2]);

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 3');
  console.log('=>', findFirstDuplicate([2, 1, 3, 3, 2]));
  console.log('=>', findFirstDupe([2, 1, 3, 3, 2]));

  console.log('17');
  console.log('=>', findFirstDuplicate([2, 1, 17, 3, 24, 43, 99, 17, 39, 3, 2]));
  console.log('=>', findFirstDupe([2, 1, 17, 3, 24, 43, 99, 17, 39, 3, 2]));

  console.log('Expecting: -1');
  console.log('=>', findFirstDuplicate([1, 2, 3, 4]));
  console.log('=>', findFirstDupe([1, 2, 3, 4]));

  console.log('Expecting: 2');
  console.log('=>', findFirstDuplicate([1, 3, 4, 2, 2]));
  console.log('=>', findFirstDupe([1, 3, 4, 2, 2]));

  console.log('Expecting: 3');
  console.log('=>', findFirstDuplicate([3, 1, 3, 4, 2]));
  console.log('=>', findFirstDupe([3, 1, 3, 4, 2]));
}

module.exports = findFirstDupe;
