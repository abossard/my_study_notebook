var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function calcFib(n) {
  console.log(`calcFib(${n})`)
  if (n <= 1) {
    console.log(`R: ${n}`)
    return n
  }
  console.log(`calcFib(${n - 1}) + calcFib(${n - 2})`)
  return calcFib(n - 1) + calcFib(n - 2)
}

function calcFibLoop(n) {
  let number1 = 0
  let number2 = 1
  for(let i = 1; i < n; i++) {
    let sum = number1 + number2
    number1 = number2
    number2 = sum
  }
  return number2
}

function readLine (line) {
  var n = parseInt(line.toString(), 10);
  console.log(calcFibLoop(n));
  process.exit();
}

function main() {
  for(let i=1; i < 10; i++) {
    console.log(`${i} = ${calcFibLoop(i)}`);
  }
  process.exit()
}
//main()