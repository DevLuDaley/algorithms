// Function that uses for loop.
function onlyOne(value1, value2, value3) {
  const array = [value1, value2, value3];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }

  return count === 1;
}

console.log(onlyOne(true, false, false));

function onlyOne2(value1, value2, value3, count, i) {
  const array = [value1, value2, value3];

  if (i === array.length) return count === 1;

  if (array[i]) count++;

  return onlyOne2(value1, value2, value3, count, ++i);
}

console.log(onlyOne2(true, false, false, 0, 0));
