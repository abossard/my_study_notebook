var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function gcd(a, b) {
    if(b === 0) {
        return a;
    }
    let newA = a % b;
    return gcd(b, newA);
}

function readLine (line) {
    var numbers = line.split(" ").map(numberString => parseInt(numberString, 10))
    console.log(gcd(numbers[0], numbers[1]));
    process.exit();
  }
  
  function main() {
    console.log(gcd(3918848,1653264));
    process.exit()
  }
  //main()