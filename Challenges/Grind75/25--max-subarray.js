// My impl before I gave up doesn't pass all test cases

const XmaxSubArray = (nums) => {
    if (nums.length < 3) {
        return Math.max(...nums, nums.reduce((a, c) => a + c, 0));
    }
    let max = Number.NEGATIVE_INFINITY;
    let prevMax;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        curr += num;
        if (curr > max) {
            if (curr > prevMax || prevMax === undefined) {
                if (prevMax === undefined) {
                    prevMax = curr;
                } else {
                    prevMax = max;
                }
            }
            max = curr;
        } else if (curr <= prevMax) {
            if (nums[i] > prevMax && prevMax < 0) {
                max = 0;
            }
            curr = 0;
        }
    }

    return max;
};

// Model solution
const maxSubArray = (nums) => {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {

        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > maxSum)
            maxSum = nums[i];
    }
    return maxSum;
};


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// [-2, 1, -2, 4, 3, 5, 6, 1, 5];

const nums2 = [-2, -3, -1];
const nums3 = [-1, 0, -2]
const nums4 = [8, -19, 5, -4, 20];
debugger;
console.log(maxSubArray(nums));