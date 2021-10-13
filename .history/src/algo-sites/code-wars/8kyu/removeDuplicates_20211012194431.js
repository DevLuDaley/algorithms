/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
https://www.notion.so/distinct-4d8c37142e58494483963759e6d4c5fb
*/

function distinct1(a) {
  let filteredA;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    // const filteredA = a.find((each) => each == element);
    // const newA = a.shift();
    const copiedA = a.slice();
    const shiftedA = copiedA.shift();
    copiedA;
    a;
    shiftedA;
    element;

    // if (copiedA.includes(shiftedA)) {
    if (copiedA.includes(shiftedA)) {
      // filteredA = a.filter((element) => element != shiftedA);
      filteredA = a.slice(shiftedA);// != shiftedA);
    } else {
      return a;
    }
    a;
    filteredA;
    // newA;
  }
  //   return [];
  // return a;
  return filteredA;
}
function distinct(array) {
//   create a container array to hold the solution
  const box = [];
  // iterate over array
  for (let i = 0; i < array.length; i++) {
    // create a variable to represent the current array element on each iteration
    const element = array[i];
    //     if the element is in the solution box then move on. If not put the element in the solution box.
    box.includes(element) ? box : box.push(element);
  }
  //   return the solution
  return box;
}
distinct([1, 2, 1]);

// distinct([1]);// , [1]);
// distinct([1, 2]);// , [1,2]);
distinct([1, 1, 2]);// , [1,2])
distinct([1, 1, 2, 1]);// , [1, 2])
distinct([1, 9, 9, 1]);// , [ 1, 9 ])
distinct([1, 35, 9, 9, 44, 1, 23, 44, 9, 44, 39, 44, 23, 44, 23, 19]);// , [ 1, 35, 9, 44, 23, 39, 19 ])

const distinct3 = (a) => a.filter((item, index) => a.indexOf(item) === index);
distinct3([1, 1, 2]);// , [1,2])
distinct3([1, 1, 2, 1]);// , [1, 2])
distinct3([1, 9, 9, 1]);// , [ 1, 9 ])
distinct3([1, 35, 9, 9, 44, 1, 23, 44, 9, 44, 39, 44, 23, 44, 23, 19]);// , [ 1, 35, 9, 44, 23, 39, 19 ])
