
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const isBalancedHelper = (root) => {
    if (root == null) return 0;

    let left = isBalancedHelper(root.left);
    let right = isBalancedHelper(root.right);

    if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
};

const isBalanced = (root) => {
    debugger;
    if (root == null)  return true;

    const max = isBalancedHelper(root);
    if (max !== -1) {
        return true;
    }
    return false;
};


// const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// // [1,2,2,3,3,null,null,4,4]
// const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));
// [1,2,3,4,5,6,null,8]
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6, new TreeNode(8)), null));
console.log(isBalanced(tree3));
// console.log(JSON.stringify(tree3));