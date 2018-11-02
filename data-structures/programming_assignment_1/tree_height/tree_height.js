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

const getHeight = (node, depth = 1, max_depth = 1) => {
    console.log(`Visitting Node: ${node.n}`)
    return depth
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
        console.log(`Count ${count}, Input ${input}`);
        process.exit();
    })
}
//mainFromStdinput()


const mainTest = () => {
    const tree = buildTree([9, 7, 5, 5, 2, 9, 9, 9, 2, -1]);
    console.log(tree)
    console.log(getHeight(tree))

    process.exit()
}

mainTest()