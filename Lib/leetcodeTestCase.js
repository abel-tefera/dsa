
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function createBinaryTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) return null;
    let node = new TreeNode(arr[i]);
    node.left = createBinaryTree(arr, 2 * i + 1);
    node.right = createBinaryTree(arr, 2 * i + 2);
    return node;
}

export default createBinaryTree;
