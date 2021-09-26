function twoHighest(arr) {
  // !order array in asc order
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  // console.log(arr)

  // const months = ['March', 'Jan', 'Feb', 'Dec'];
  const months = [4, 10, 10, 9];
  months.sort();
  console.log(months);
  // expected output: Array ["Dec", "Feb", "Jan", "March"]

  // ! check and confirm that the last two elements are not the same value

  //! pop off last 2 elements in the array
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
  if (box[0] === sorted[sorted.length - 1]) {
    // var nope = sorted.pop();
    // box.push(last)
    // }
  }

  // var fillTheBox = () => {

  const lastOne = sorted.pop();
  box.push(lastOne);
  // }

  // !push to a new array
  // !return last 2 values in array
  console.log(box);

  return box;
}

twoHighest([4, 10, 10, 9]);

module.exports = twoHighest;
