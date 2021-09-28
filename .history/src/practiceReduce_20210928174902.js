// const numbers = [10, 20];
const numbers = [18, 20, 22, 22, 30, 24, 30, 34];
// const numbers = [20,26,22];

// document.getElementById("demo").innerHTML =

function myFunc(total, num) {
  console.log(total + num);
  return total + num;
  // let sum = total;
}
console.log(numbers.reduce(myFunc) / numbers.length);

// /Users/LHD/Documents-mb-pro/documents-projects--sorted-by-prog-language/projects-front-end/javascript/javascript-practice/algorithms/algorithms/src/practiceReduce.js
