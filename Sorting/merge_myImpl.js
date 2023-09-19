const mergeSort = (arr) => {
    debugger;
    if (arr.length === 1) return arr;
    const left = arr.slice(0, Math.floor(arr.length / 2))
    const right = arr.slice(Math.floor(arr.length / 2))

    return mergeArr(mergeSort(left), mergeSort(right));
}

const mergeArr = (left, right) => {
    let leftIdx = 0
    let rightIdx = 0;
    const result = [];

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]){
            result.push(left[leftIdx]);
            leftIdx += 1;
        } else if (left[leftIdx] > right[rightIdx]) {
            result.push(right[rightIdx])
            rightIdx += 1;
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

// const exArr = [...Array(10000)].map(() => Math.floor(Math.random() * 50000));

console.time("Merge");
// mergeSort(exArr);
console.timeEnd("Merge");

console.log(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))