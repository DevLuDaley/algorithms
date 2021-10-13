/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
https://www.notion.so/distinct-4d8c37142e58494483963759e6d4c5fb
*/

function distinct(a) {
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    // const copiedA = a.slice();
    // const filteredA = a.find((each) => each == element);
    const newA = a.shift();
  }
  //   return [];
  return a;
}

// distinct([1])//, [1]);
// distinct([1,2])//, [1,2]);
distinct([1, 1, 2]);// , [1,2])
