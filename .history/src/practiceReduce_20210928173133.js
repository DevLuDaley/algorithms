const numbers = [20, 26, 22];

// document.getElementById("demo").innerHTML =
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
  const all = (total + num) / numbers.length;
  // return total / numbers.length;
  return all; // numbers.length;
}
// /Users/LHD/Documents-mb-pro/documents-projects--sorted-by-prog-language/projects-front-end/javascript/javascript-practice/algorithms/algorithms/src/practiceReduce.js
