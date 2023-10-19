function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const invertTree = (currentNode) => {
    if (!currentNode) return null;
    const queue = [];
    const inverted = new TreeNode(currentNode.val, null, null);
    
    queue.push([currentNode, inverted]);
    let temp;

    while (queue.length > 0) {
        [currentNode, temp] = queue.shift();
        
        if (currentNode.right) {
            temp.left = new TreeNode(currentNode.right.val, null, null);
            queue.push([currentNode.right, temp.left]);
        }

        if (currentNode.left) {
            temp.right = new TreeNode(currentNode.left.val, null, null);
            queue.push([currentNode.left, temp.right])
        }

    }
    return inverted;
}

const listNode1 = new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null));


// root = [4,2,7,1,3,6,9]
const listNode2 = new TreeNode(4, new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)), new TreeNode(7, new TreeNode(6, null, null), new TreeNode(9, null, null)));
console.log(JSON.stringify(invertTree(listNode2)));
