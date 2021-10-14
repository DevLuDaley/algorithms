const dataList1 = [10, 30, 46, 1, 9, 90, 20, -10, -20, -1, 200];
const dataList2 = [10, 30, 46, 1, 9, 90, 20, -10, -20, -1, 200, -10];
const dataList3 = [10, 30, 46, 1, 9, 90, 20, -10, -20, -1, 200, -20];
const dataList4 = [10, 30, 46, 1, 90, 20, 10, 20, 1, 200];

const get2ndSmallest = (dList) => {
  const value2nd = dList[0];
  return value2nd;
};
console.log(get2ndSmallest(dataList1)); // -10
console.log(get2ndSmallest(dataList2)); //
console.log(get2ndSmallest(dataList3));
console.log(get2ndSmallest(dataList4));
