const numbers = [100, 50];

// document.getElementById("demo").innerHTML =
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
  return total / numbers.length;
}
// /Users/LHD/Documents-mb-pro/documents-projects--sorted-by-prog-language/projects-front-end/javascript/javascript-practice/algorithms/algorithms/src/practiceReduce.js
