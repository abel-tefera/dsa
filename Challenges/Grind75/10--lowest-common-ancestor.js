const lowestCommonAncestorIterative = (root, p, q) => {
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};

const lowestCommonAncestorRecursive = (root, p, q) => {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestorRecursive(root.right, p, q);
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestorRecursive(root.left, p, q);
    }
    return root;
};

// [6,2,8,0,4,7,9,null,null,3,5]
const tree = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9)));
console.log(lowestCommonAncestor(tree, 2, 4))
