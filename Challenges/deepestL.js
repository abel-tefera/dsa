const deepestLeavesSum = (root, sum = 0, level = {
    max: 0,
    current: 0
}) => {
    if (root) {
        debugger;
        level.current += 1;
        sum = deepestLeavesSum(root.left, sum, level);
        sum = deepestLeavesSum(root.right, sum, level);
        if (level.max < level.current) {
            level.max = level.current;
            sum = root.val;
        } else if (level.max === level.current) {
            sum += root.val;
        }
        level.current -= 1;
    }

    return sum;
};

var tree = {
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

deepestLeavesSum(tree);

console.log(deepestLeavesSum(tree));