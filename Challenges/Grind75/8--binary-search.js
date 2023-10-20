// My impl

const search = function (nums, target) {
    let idx = 0;
    while (nums.length >= 1) {
        const mid = Math.floor(nums.length / 2);
        const midNum = nums[mid];
        if (midNum > target) {
            nums = nums.slice(0, mid)
        } else if (midNum < target) {
            nums = nums.slice(mid + 1)
            idx += mid + 1
        } else {
            return idx + mid;
        }
    }
    return -1;
};

// Best
const binarySearch = (nums, target) => {
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo + 1) / 2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid;
        }
    }
    return nums[lo] == target ? lo : -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
console.log(search(nums, 9));