/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    if (score.length === 1) return score;
    const left = score.slice(0, Math.floor(score.length / 2))
    const right = score.slice(Math.floor(score.length / 2))
    debugger;
    return mergeArr(sortTheStudents(left, k), sortTheStudents(right, k), k);
};

const mergeArr = (left, right, k) => {
    let leftIdx = 0
    let rightIdx = 0;
    const result = [];

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx][k] > right[rightIdx][k]) {
            result.push(left[leftIdx]);
            leftIdx += 1;
        } else {
            result.push(right[rightIdx])
            rightIdx += 1;
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}