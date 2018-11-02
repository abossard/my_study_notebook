const { createInterface } = require("readline");

process.stdin.setEncoding('utf8');

var readlineInterface = createInterface({
    input: process.stdin,
    terminal: false
});

const pairs = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
]

const areMatching = (left, right) => {
    return pairs.filter(pair => left === pair[0] && right === pair[1]).length === 1
}

let bracketStack = []

const findMismtach = text => {
    for (var i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (pairs.filter(pair => pair[0] === char).length > 0) {
            bracketStack.push({ bracket: char, position: i })
        }
        if (pairs.filter(pair => pair[1] === char).length > 0) {
            const left = bracketStack.pop()
            if (!areMatching(left.bracket, char)) {
                return i + 1
            }
        }
    }

    if (bracketStack.length === 0) {
        return "Success"
    } else {
        return bracketStack.pop().position + 1
    }
}

const mainFromStdinput = () => {
    let lines = [];

    readlineInterface.on('line', line => {
        lines.push(line);
    });

    readlineInterface.on('close', () => {
        console.log(findMismtach(lines.join()));
        process.exit();
    })
}
mainFromStdinput()

const mainTest = () => {
    console.log(findMismtach('[]'))
    process.exit()
}

//mainTest()