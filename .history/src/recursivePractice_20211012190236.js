// const recursivePractice = (n) => {
//   const i = 0;
//   while (i <= n) {
//     console.log(n);
//   }
//   return n;
// };
// // console.log('object');
// recursivePractice(5);

// const factorial = (n) => {
//   let i = 0;
//   n;
//   while (i <= n) {
//     console.log(i);
//     i++;
//   }
// };
// factorial(5);

const countDownFrom = (n) => {
  console.log(n);
  countDownFrom(n - 1);
};

countDownFrom(5);
