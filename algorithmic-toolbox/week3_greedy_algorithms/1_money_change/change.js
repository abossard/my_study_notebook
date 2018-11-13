var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

const denominations = [10, 5, 1]

function change(m) {
    let rest = m;
    let count = 0;
    let i = 0;
    while(rest > 0) {
        if(denominations[i] <= rest) {
            count += 1;
            rest -= denominations[i]
        } else {
            i++;
        }
    }
    return count;
}

function readLine (line) {
    var number = parseInt(line, 10)
    console.log(change(number));
    process.exit();
  }
  
  function main() {
    console.log(change(39));
    process.exit()
  }
  //main()