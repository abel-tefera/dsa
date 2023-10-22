const majorityElement = (nums) => {
    const threshold = Math.floor(nums.length / 2);
    const appearances = {}

    for (let i = 0; i < nums.length; i++){
        const num = nums[i];
        if (appearances[num] === undefined) {
            appearances[num] = 1;
        } else if (appearances[num] < threshold)  {
            appearances[num] += 1;
        } else {
            return num;
        }
    }

    return nums[0]
};