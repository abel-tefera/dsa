// Brute force
const twoSumBrute = function (nums, target) {
    const output = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i, j);
            }
        }
    }
    return output
};


// Hashmap Model solution
const twoSum = (nums, target) => {
    debugger;
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    return [];
}

twoSum([2, 7, 11, 15], 9) 