function arrayDiff(a, b) {
  const returnThis = [];
  for (let i = 0; i < a.length; i++) {
    i;
    // const element = a[i];
    for (let n = 0; n < b.length; n++) {
    //   const element = b[n];
      b[n] != a[i] ? returnThis.push(a[i]) : null;
    } // b[n] == a[i]? a.replace(a[i],"")
  }
  return returnThis;
}

arrayDiff([3, 4], [3]);
arrayDiff([1, 8, 2], []);

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