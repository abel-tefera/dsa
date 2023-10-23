/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TIMEOUT SLOW
// var containsDuplicate = function(nums) {
//     for (let num of nums){
//         if (nums.indexOf(num) !== nums.lastIndexOf(num)){
//             return true
//         }
//     }
//     return false;
// };

// Passing but slow
const containsDuplicate = (nums) => {
    const letters = {};
    for (let num of nums){
        if (letters[num] === undefined){
            letters[num] = true;
        } else {
            return true;
        }
    }
    return false;
};