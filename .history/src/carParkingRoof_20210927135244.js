function carParkingRoof(cars, k) {
  // Write your code here

  cars.sort();
  console.log(cars);
  //   console.log(cars);
  //   console.log(Math.min(cars));
  const n = cars.length;
  let ans;
  for (let i = 0; i < n - k + 1; i++) {
    console.log(ans);
    ans = Math.min(cars[i + k - 1] - cars[i]);
  }
  console.log(ans + 1);
//   console.log(9);
//   return 9;
}
const cars = [2, 10, 8, 17];
const k = 3;

// console.log(carParkingRoof(cars, k));
carParkingRoof(cars, k);
