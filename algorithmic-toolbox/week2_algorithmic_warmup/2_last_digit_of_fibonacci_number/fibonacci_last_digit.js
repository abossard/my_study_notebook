var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function calcFibLoop(n) {
  let number1 = 0
  let number2 = 1
  for(let i = 1; i < n; i++) {
    let sum = number1 + number2
    number1 = number2
    number2 = sum
  }
  return number2 % 10
}

function readLine (line) {
  var n = parseInt(line.toString(), 10);
  console.log(calcFibLoop(n));
  process.exit();
}

function main() {
  console.log(calcFibLoop(1000000000000));
  process.exit()
}
main()