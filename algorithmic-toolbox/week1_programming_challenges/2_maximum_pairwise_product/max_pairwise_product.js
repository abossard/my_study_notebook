var readline = require('readline');

process.stdin.setEncoding('utf8');

var readLineInput = readline.createInterface({
  input: process.stdin,
  terminal: false
});

readLineInput.on('line', readLine);

var lineIndex = 0;
var inputCount = 0;
var inputArray = [];

function max_pairwise_product_naive(inputArray) {
  sorted = inputArray.slice().sort((left, right)=>right-left)
  return sorted[0] * sorted[1];
}

function max_pairwise_product(inputArray) {
  var biggestNumberLimit = 2;
  if(inputArray.length < biggestNumberLimit) {
    return 0;
  }
  var biggestNumbers = [];
  inputArray.forEach(number => {
    if(biggestNumbers.length < biggestNumberLimit) {
      biggestNumbers.push(number);
      return;
    }
    
    for(var i=0; i<biggestNumbers.length;i++) {
      if(number > biggestNumbers[i] && biggestNumbers.filter(n => biggestNumbers[i] > n).length === 0) {
        biggestNumbers[i] = number;
        return;
      }
    }
  });
  return biggestNumbers[0] * biggestNumbers[1];
}

function stressTest(runs, dataSize, maxInt) {
  var run=0;
  while(run < runs) {
    var randomInput = [];
    for(var i=0;i<dataSize;i++) {
      randomInput.push(Math.floor(Math.random() * Math.floor(maxInt)))
    }
    var real = max_pairwise_product(randomInput);
    var naive = max_pairwise_product_naive(randomInput);
    if(real === naive) {
      console.log(`[${run}]: Ok.`)
    } else {
      console.log(`Fail: Naive: ${naive}, Real: ${real}, Input: ${randomInput}`)
      process.exit(0)
    }
    run++;
  }
  console.log(`Time Naive [ms]: ${timeNaive}, Time Real [ms]: ${timeReal}`)
  process.exit(0)
}

//stressTest(30, 10000000, 10000)

function readLine (line) {
  if (line !== "\n") {
    if(lineIndex == 0) {
      inputCount = parseInt(line.toString(), 10);
      lineIndex++;
      return;
    }
    if(lineIndex == 1) {
      inputArray = line.toString().split(' ').map(function(number) {
        return parseInt(number, 10);
      });
      if(inputCount !== inputArray.length) {
        process.exit();
      }
      console.log(max_pairwise_product(inputArray));
      process.exit();
    }
  }
}