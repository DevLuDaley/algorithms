function arrayDiffer(a, b) {
  console.log(b);
  if (b.length == 0) {
    return a;
  }
  const returnThis = [];
  for (let i = 0; i < a.length; i++) {
    i;
    // const element = a[i];
    for (let n = 0; n < b.length; n++) {
    //   const element = b[n];
      a.includes(b[n]) ? console.log(b[n]) : null;

      b[n];
      a[i];
      b[n] == a[i];
      b[n] != a[i] ? returnThis.push(a[i]) : null;
    } // b[n] == a[i]? a.replace(a[i],"")
  }
  return returnThis;
}

function arrayDiff(a, b) {
  if (b.length == 0) {
    return a;
  }
  [...b];
  for (let n = 0; n < b.length; n++) {
    b[n];
    // const newA = a.filter((num) => num == b[n],
    const newArr = a.filter((num) => num === [...b]);// ,
    //   console.log(num;)
    //   num;
    // );

    return newArr;
  }
}

const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter((el) => el > 2);
newArr;
// [3,4,5]
arr;
// [1,2,3,4,5];
// arrayDiff([3, 4], [3]);
// arrayDiff([1, 8, 2], []);
arrayDiff([1, 2, 3], [1, 2]);
// function arrayDiff(a, b) {
// //   function removeNums() {
//   const returnThis = [];
//   for (let i = 0; i < a.length; i++) {
//     i;
//     const element = a[i];
//     for (let n = 0; n < b.length; n++) {
//       //   const element = b[n];
//       // b[n] != a[i] ? returnThis.push(a[i]) : null;
//       if (b[n] != a[i]) {
//         returnThis.push(a[i]);
//         console.log(returnThis);
//       }
//     }
//     // }

//     return returnThis;
//   }
// //   b = [] ? a : removeNums();
// }
