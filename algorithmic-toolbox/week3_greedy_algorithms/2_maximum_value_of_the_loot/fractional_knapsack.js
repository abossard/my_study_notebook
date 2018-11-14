var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let count = 0;
let sackSize = 0;
let pairs = []

function knapsack(pairs, size) {
    let sorted = pairs.slice().map(item=>[item[1], item[0]/item[1]])
    let rest = size
    let i = 0
    let value = 0
    sorted.sort((a, b) => b[1] - a[1])
    while(rest > 0 && i < sorted.length) {
        let item = sorted[i]
        let takeWeight = Math.min(item[0], rest)
        rest -= takeWeight
        value += takeWeight * item[1]
        i++
    }
    return value;
}

function readLine (line) {
    let values = line.split(' ').map(value => parseInt(value, 10))
    if(count==0 && sackSize==0) {
        count = values[0];
        sackSize = values[1];
    } else {
        pairs.push([values[0], values[1]])
    }
    if(pairs.length == count) {
        console.log(knapsack(pairs, sackSize))
        process.exit();
    }
}
  
function main() {
    console.log(knapsack([
        [60, 20],
        [100, 50],
        [120, 30],
    ], 50))
      process.exit()
}
//main()