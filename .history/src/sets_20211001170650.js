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

findFirstDupe(arr)=>{
// const arr = [2, 1, 3, 3, 2];
// const newSet = new Set([2, 1, 3, 3, 2]);
const newSet = new Set(arr);
for (const num of arr) {
  if (newSet.has(num)) {
    console.log(num);
    // return num
  } else {
    newSet.add(num);
  }
}
// console.log(newSet);
console.log(-1);
}
findFirstDupe([2, 1, 3, 3, 2])