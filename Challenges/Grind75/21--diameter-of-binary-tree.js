import createBinaryTree from "../../Lib/leetcodeTestCase.js";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Not passing all test cases
const XdiameterOfBinaryTree = (root) => {
    const left = root.left;
    const right = root.right;

    const leftHeight = dfs(left);
    const rightHeight = dfs(right);

    return leftHeight + rightHeight - 2
};

const dfs = (tree, level = 0, max = 0) => {
    level += 1;
    if (tree) {
        max = dfs(tree.left, level, max);
        max = dfs(tree.right, level, max);
    }
    if (level > max) {
        max = level;
    }
    level -= 1;
    return max;
}


var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    dfs(root);
    
    return diameter;
    
    function dfs(node) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // update diameter at every node
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }
};


// root = [1, 2, 3, 4, 5];
// const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const root2Arr = [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
debugger;
const root2 = createBinaryTree(root2Arr);
// console.log(JSON.stringify(root2));
console.log(diameterOfBinaryTree(root2));

