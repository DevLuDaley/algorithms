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

function arrayDiff2(a, b) {
  if (b.length == 0) {
    return a;
  }
  //   a.length;
  let newArr;
  //   for (let i = 0; i < a.length; i++) {
  for (let n = 0; n < b.length; n++) {
    b[n];
    // const newA = a.filter((num) => num == b[n],
    // newArr = a.filter((num) => num == b[n]);// ,
    if (!a.includes(b[n])) {
      returnThis.push();
    }
  }
  return newArr;
}

// Create function called “arrayDiff” that takes two arrays as arguments, “array1” and “array2.”
function arrayDiff(array1, array2) {
// Handle edge cases: (a) If the length of “array1” is 0, return an empty array
  if (array1.length === 0) { return []; }
  // Handle edge cases: (b) If the length of “array2” is 0, return “array1”
  if (array2.length === 0) { return array1; }

  // Create the array to return called “returnArray”
  const returnArray = [];
  // Loop through “array1”
  array1.forEach((element) => {
    // If the element is not included in “array2”, push it to “returnArray”
    if (!array2.includes(element)) { returnArray.push(element); }
  });
  // Return “returnArray”
  return returnArray;
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
