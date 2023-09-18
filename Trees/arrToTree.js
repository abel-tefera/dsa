import { BinarySearchTree } from "./BST.js"

const arrToTree = (arr) => {
    const BST = new BinarySearchTree();

    arr.forEach((el) => {
        BST.insert(el)
    })

    return BST;
}

console.log(JSON.stringify
    (arrToTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])));