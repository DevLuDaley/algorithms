process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', (data) => {
  input_stdin += data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n');
  main();
});

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  const i = 4;
  const d = 4.0;
  const s = 'HackerRank ';
  // Declare second integer, double, and String variables.
  let secondInt;
  let doubleInt;
  let stringVar;
  // Read and save an integer, double, and String to your variables.
  secondInt = Number(readLine());
  doubleInt = parseFloat(readLine());
  stringVar = readLine();

  // Print the sum of both integer variables on a new line.
  // console.log(secondInt + i)
  process.stdout.write(`${i + secondInt}\n`);
  // Print the sum of the double variables on a new line.
  // console.log(doubleInt + d)
  process.stdout.write(`${(d + doubleInt).toFixed(1)}\n`);

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  // console.log(stringVar + s)
  process.stdout.write(`${s + stringVar}\n`);
}
