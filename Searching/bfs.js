import areEqual from "../Lib/areEqual.js"
import { BinarySearchTree, sample } from "../Trees/BST.js";

const bfs = (currentNode) => {
    const list = [];
    const queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left)
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

// const bfsR = (list = [], queue = []) => {
//     debugger;
//     // if (queue.length === 0 && list.length > 0) {
//     //     return list;
//     // } else if (queue.length === 0 && list.length === 0) {
//     //     queue.push(node)
//     // }
//     if (!queue.length) {
//         return list;
//     }

//     const curr = queue.shift();
//     list.push(curr.val)

//     if (node.left) {
//         queue.push(node.left)
//     }

//     if (node.right) {
//         queue.push(node.right);
//     }

//     return bfsR(list, queue);

// }

const tree = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 35,
            left: null,
            right: null,
        },
    },
};
// const simple = sample();

const BST = new BinarySearchTree();
Array(100).fill(0).map(() => Math.floor(Math.random() * 100)).forEach((el) => BST.insert(el));

console.log(bfsR([tree.root]));
// console.log(JSON.stringify(BST))
// console.log(bfs(simple));
