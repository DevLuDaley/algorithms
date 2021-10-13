function arrayDiff(a, b) {
  const removeNums = () => {
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
  };
  b = [] ? a : removeNums();
}

// arrayDiff([3, 4], [3]);
arrayDiff([3, 4], []);
// arrayDiff([1,8,2], [];
