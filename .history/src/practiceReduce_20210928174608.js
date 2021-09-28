const numbers = [18, 20, 22, 22, 30, 24, 30, 34];
// const numbers = [20,26,22];

// document.getElementById("demo").innerHTML =
console.log(numbers.reduce(myFunc) / numbers.length);

function myFunc(total, num) {
  console.log('🚀 ~ file: practiceReduce.js ~ line 11 ~ myFunc ~ total + num', total + num);
  return total + num;
  // let sum = total;
}
// /Users/LHD/Documents-mb-pro/documents-projects--sorted-by-prog-language/projects-front-end/javascript/javascript-practice/algorithms/algorithms/src/practiceReduce.js
