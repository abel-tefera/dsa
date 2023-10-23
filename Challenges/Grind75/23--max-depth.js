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

const maxDepth = (root) => {
    return dfs(root) - 1;
};