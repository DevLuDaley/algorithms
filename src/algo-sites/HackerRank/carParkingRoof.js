function carParkingRoof(cars, k) {
  cars.sort();
  console.log(cars);
  const n = cars.length;
  let ans;

  for (let i = 0; i < n; i++) {
    ans = Math.min(cars[(i + k) - 1] + cars[i]);
    console.log(ans);
  }
  console.log(ans + 1);
//   console.log(9);
//   return 9;
}
// const cars = [2, 10, 8, 17];
const cars = [6, 2, 12, 7];
const k = 3;

// console.log(carParkingRoof(cars, k));
carParkingRoof(cars, k);
