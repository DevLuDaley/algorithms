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
const distinct = (array) => {
  // console.log(arr);
  // create duplicate array
  const dupeArr = array.slice();
  // create iterate over duplicate array
  const box = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    box.includes(element) ? box : box.push(element);
  }
  return box;
};
distinct([1, 2, 1]);

// distinct([1]);// , [1]);
// distinct([1, 2]);// , [1,2]);
distinct([1, 1, 2]);// , [1,2])
distinct([1, 1, 2, 1]);// , [1, 2])
distinct([1, 9, 9, 1]);// , [ 1, 9 ])
distinct([1, 9, 9, 1]);// , [ 1, 9 ])
distinct([1, 35, 9, 9, 44, 1, 23, 44, 9, 44, 39, 44, 23, 44, 23, 19]);// , [])
