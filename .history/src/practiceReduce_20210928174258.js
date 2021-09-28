const numbers = [20, 22, 22, 24];
// const numbers = [20,26,22];

// document.getElementById("demo").innerHTML =
console.log(numbers.reduce(myFunc) / numbers.length);

function myFunc(total, num) {
  // console.log(num);
  total + num;
  // console.log(total);
  let sum = total;
  // console.log(sum);
  sum += num;
  // console.log(sum);
  const all = sum;
  // console.log(num);
  // console.log(total);
  // return total / numbers.length;
  return all; // numbers.length;
}
// /Users/LHD/Documents-mb-pro/documents-projects--sorted-by-prog-language/projects-front-end/javascript/javascript-practice/algorithms/algorithms/src/practiceReduce.js
