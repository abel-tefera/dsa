// Works when there are no zeros in the array
// Time Complexity: O(n)
const productExceptSelf = function (nums) {
    const output = [];
    const dp = {
        left: 1,
        right: 1
    }

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp.right = nums.slice(1).reduce((acc, curr) => acc * curr, 1);
            output.push(dp.right);
        } else if (i === nums.length - 1) {
            output.push(dp.left * nums[i - 1]);
        } else {
            dp.left *= nums[i - 1];
            dp.right /= nums[i];
            output.push(dp.left * dp.right);
        }
    }

    return output;
};

// console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]