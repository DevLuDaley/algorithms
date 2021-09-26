function twoHighest(arr) {
    // !order array in asc order
    var sorted = arr.sort(function(a, b) {
  return a - b;
})
    console.log(sorted)
    // console.log(arr)


// const months = ['March', 'Jan', 'Feb', 'Dec'];
const months = [4, 10, 10, 9];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]


    //!pop off last 2 elements in the array
    var box = []
    var last = sorted.pop()
    box.push(last)
    var last = sorted.pop()
    box.push(last)

    // !push to a new array
    // !return last 2 values in array

  console.log(box)

  return box
}


twoHighest([4, 10, 10, 9])