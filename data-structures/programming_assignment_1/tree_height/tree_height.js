const { createInterface } = require("readline");

process.stdin.setEncoding('utf8');

var readlineInterface = createInterface({
    input: process.stdin,
    terminal: false
});

const buildTree = input => {
    var nodes = input.map((_, index) => ({ n: index, children: [] }))
    var rootNode = null
    input.forEach((parent, index) => {
        nodes[index].parent = parent;
        if (parent === -1) {
            rootNode = nodes[index]
        } else {
            nodes[parent].children.push(nodes[index])
        }
    })
    return rootNode;
}

const getHeightIterative = startNode => {
    let nodeStack = []
    nodeStack.push(startNode)
    let height = 0
    while(true) {
        let stackSize = nodeStack.length;
        if(stackSize === 0) {
            return height
        }
        height++
        while(stackSize > 0) {
            let node = nodeStack.shift()
            node.children.forEach(child=> {nodeStack.push(child)})
            stackSize--
        }
    }
}

const getHeightRecursive = (node, depth = 1) => {
    if(node.children.length === 0) {
        return depth
    }
    return Math.max(depth, ...node.children.map(child => getHeightRecursive(child, depth + 1)))
}

const mainFromStdinput = () => {
    var count = -1;
    var input = [];

    readlineInterface.on('line', line => {
        if (count === -1) {
            count = parseInt(line, 10)
        } else {
            input = line.split(' ').map(n => parseInt(n, 10))
        }
    });

    readlineInterface.on('close', () => {
        console.log(getHeightIterative(buildTree(input)))
        process.exit();
    })
}
mainFromStdinput()


const mainTest = () => {
    const tree = buildTree('9 7 5 5 2 9 9 9 2 -1'.split(' ').map(n => parseInt(n, 10)));
    console.log(getHeightIterative(tree))
    process.exit()
}

//mainTest()