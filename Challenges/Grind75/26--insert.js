/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// Doesn't pass edge cases

const insert = (intervals, newInterval) => {
    if (intervals.length === 0) {
        intervals.push(newInterval)
        return intervals;
    } else if (intervals.length === 1) {
        if (intervals[0][1] < newInterval[0]){
            intervals.push(newInterval)
            return intervals;
        } else if (intervals[0][0] > newInterval[1]){
            intervals.unshift(newInterval);
            return intervals;
        }
        return [[Math.min(parseInt(intervals[0][0]), parseInt(newInterval[0])), Math.max(parseInt(intervals[0][1]), parseInt(newInterval[1]))]]
    }
    const [newStart, newEnd] = newInterval;
    let pointerStart = 0;
    let pointerEnd = 0;
    let count = 1;

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start < newStart && i > 0) {
            pointerStart = i;
            count += 1;
        } else if (end > newEnd && i > 0) {
            pointerEnd = i;
            break;
        }
    }

    const i = intervals[pointerStart][0];
    const j = intervals[pointerEnd][1];

    if (count > 1) {
        intervals.splice(pointerStart, count + 1, [i, j]);
    } else {
        if (intervals[pointerStart][1] < newEnd && intervals[pointerStart + 1][0] - 1 > newStart ){
            intervals[pointerStart][1] = newEnd
        } else {
            intervals.splice(pointerStart, count + 1, [i, j]);
        }
    }


    return intervals;
};

debugger;
const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
const newInterval = [4, 8];
const intervals2 = [[1,5],[6,8]];
const newInterval2 = [5,6];

const intervals3 = [[1,3],[6,9]];
const newInterval3 = [2,5]

console.log(insert(intervals3, newInterval3));

// [[1,2],[3,10],[12,16]]