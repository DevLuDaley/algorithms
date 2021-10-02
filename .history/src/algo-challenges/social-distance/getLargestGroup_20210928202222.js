const positionData = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
];

function getLargestGroup(data) {
  // first position data
  const counter = 0;
  for (let j = 0; j < data.length; j++) {
    for (const i in data[j]) {
      if (data[1][i] != 0) {
        if (data[1][i - 1] == 0 || data[1][i + 1] == 0) {
        // counter++
          console.log(i);
        }
      }
    // return data[1][i]
    // return "Yippie!"
    }
  }
  return counter;
  // return 0;
}

console.log(getLargestGroup(positionData));

//! person = if not a zero
// horizontal = [i +1] || [i -1] //test this
// vertical = positionData[1] row 1 = positionData[1 - 1]
//          = positionData[1] row 3 = positionData[1 + 1]
// group = multiple persons
