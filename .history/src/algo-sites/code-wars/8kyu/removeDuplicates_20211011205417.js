function distinct(a) {
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    // const copiedA = a.slice();
    const filteredA = a.find((each) => each == element);
  }
  //   return [];
  return a;
}

distinct([1, 1, 2]);
