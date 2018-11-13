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

function readLine (line) {
    let values = line.split(' ').map(value => parseInt(value, 10))
    if(count==0 && sackSize==0) {
        count = values[0];
        sackSize = values[1];
    } else {
        pairs.push([values[0], values[1], values[0]/values[1]])
    }
    if(pairs.length == count) {
        // execute
        process.exit();
    }
}
  
function main() {
    console.log(change(39));
    process.exit()
}
main()