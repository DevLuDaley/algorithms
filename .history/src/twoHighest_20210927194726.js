/* eslint-disable no-console */
function twoHighest(arr) {
  // !order array in asc order
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  // console.log(arr)

  // ! check and confirm that the last two elements are not the same value

  //! pop off last element in arr[]

  //! check if first element in box[] has the same value as the last element in arr[]

  const box = [];
  const last = sorted.pop();
  box.push(last);
  console.log(last);
  console.log(box);
  console.log(box[0]);
  console.log(sorted.length - 1);
  console.log(sorted[sorted.length - 1]);

  // dupeChecker(last)
  // var dupeChecker = (lastNum) =>{
  // for (let i = 0; i <= sorted.length; i -= 1) {
  // for (const num of sorted) {
    const sortedChecker = (sorted){
      if (box[0] == sorted[sorted.length - 1]) {
    // if (box[0] === num) {
    // var nope = sorted.pop();
    console.log(box[0]);
    const sortedLength = sorted.length
    console.log(sorted[1]);
    console.log(sorted[sortedLength - 1]);
    console.log(sorted);



    
    sorted.pop();
    console.log(sorted);
    sortedChecker(sorted)
    // console.log(sorted[sorted.length - 1]);
    // box.push(last)
    // }
    } else {
    box.push(sorted[sorted.length - 1]);
  }
  // }
}
  // var fillTheBox = () => {

  // const lastOne = sorted.pop();
  // box.push(lastOne);
  // }

  // !push to a new array
  // !return last 2 values in array
  console.log(box);

  return box;
}

twoHighest([10, 4, 10, 10, 9, 10]);

module.exports = twoHighest;
