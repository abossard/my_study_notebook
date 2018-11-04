const { createInterface } = require("readline");

process.stdin.setEncoding('utf8');

var readlineInterface = createInterface({
    input: process.stdin,
    terminal: false
});

let stack = []
let maxStack = []
let maxDict = {}

const push = item => {
    if (maxStack.length > 0) {
        max = maxStack[maxStack.length - 1]
        if (item > max) {
            maxStack.push(item)
            maxDict[item] = 1
        } else if (item === max) {
            maxDict[item] += 1
        }
    } else {
        maxStack.push(item)
    }
    return stack.push(item)
}

const pop = () => {
    item = stack.pop()
    if(item === 2) {
        console.log('debug')
    }
    if (maxDict[item] !== undefined) {
        maxDict[item] -= 1
        if (maxDict[item] === 0) {
            maxStack = maxStack.filter(max => max !== item)
        }
    }
    return item
}

const executeCommand = command => {
    switch (command) {
        case "max":
            if (maxStack.length > 0) {
                console.log(maxStack[maxStack.length - 1])
            }
            break;
        case "pop":
            pop()
            break;
        default:
            item = command.split(' ').map(n => parseInt(n, 10))[1]
            push(item)
            break;
    }
}

const mainFromStdinput = () => {
    var count = -1;

    readlineInterface.on('line', line => {
        if (count === -1) {
            count = parseInt(line, 10)
        } else {
            executeCommand(line)
        }
    });
}
//mainFromStdinput()


const mainTest = () => {
    const input = [
        'push 0',
        'max',
        'push 1',
        'max',
        'push 2',
        'max',
        'push 1',
        'max',
        'push 0',
        'max',
        'pop',
        'max',
        'pop',
        'max',
        'pop',
        'max',
        'pop',
        'max',
        'pop',
        'max',
        'pop',
        'max',
    ]
    input.forEach(executeCommand);
    process.exit()
}

mainTest()
