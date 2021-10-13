/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    // const copiedA = a.slice();
    const filteredA = a.find((each) => each == element);
  }
  //   return [];
  return a;
}

// distinct([1])//, [1]);
// distinct([1,2])//, [1,2]);
distinct([1, 1, 2]);// , [1,2])
