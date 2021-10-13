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
  //   a.length;
  let newArr;
  for (let i = 0; i < a.length; i++) {
    for (let n = 0; n < a.length; n++) {
      b[n];
      // const newA = a.filter((num) => num == b[n],
      newArr = a.filter((num) => num !== b[n]);// ,
    //   const newArr = a.forEach((num) => {
    //     if (num === b[n]) {
    //       num;
    //       b[n];
    //     }
    //   });// ,
      //   return newArr;
      //   console.log(num;)
      //   num;
      // );
    }
    newArr;
  }
}

// arrayDiff([3, 4], [3]);
// arrayDiff([1, 8, 2], []);
// arrayDiff([1, 2, 3], [1, 2]);
arrayDiff([1, 2, 4, 7, 22, 14, 3, 21], [14, 2, 3]);
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
