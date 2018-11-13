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
  if(n === 0) {
    return 0
  }
  let number1 = 0
  let number2 = 1
  for(let i = 1; i < n; i++) {
    let sum = number1 + number2
    number1 = number2
    number2 = sum
  }
  return number2
}

function fibMod(fibN, mod) {
  let trueFibN = fibN % 2;
  let fib = calcFibLoop(trueFibN);
  return fib % mod;
}

function readLine (line) {
  var n = line.toString().split(' ').map(s => parseInt(s, 10));
  console.log(fibMod(n[0], n[1]));
  process.exit();
}

function main() {
  console.log(fibMod(2015, 3));
  process.exit()
}
main()