const quickSort = (arr) => {
    let length = arr.length;
    const pivot = arr[length - 1];
    let leftIndex = 0;
    let rightIndex = length - 1;

    while (leftIndex < rightIndex) {
        if (arr[leftIndex] > pivot) {
            arr.push(arr[leftIndex]);
            arr.splice(leftIndex, 1, arr[rightIndex - 1]);
            arr.splice(rightIndex - 1, 1);
            rightIndex -= 1;
        } else {
            leftIndex += 1;
        }
    }

    return [...arr, rightIndex];
}

const quickSortHelper = (arr, pivotIdx) => {
    if (arr.length <= 2) return arr;
    let left, right, leftIdx, rightIdx;
    left = arr.slice(0, pivotIdx);

    if (arr.length % 2 === 0) {
        right = arr.slice(pivotIdx);
    } else {
        right = arr.slice(pivotIdx + 1);
    }

    left = quickSort(left);
    leftIdx = left.pop();
    
    right = quickSort(right);
    rightIdx = right.pop();

    const leftDone = quickSortHelper(left, leftIdx);
    const rightDone = quickSortHelper(right, rightIdx);

    leftDone.push(arr[pivotIdx], ...rightDone);
    return leftDone;
}

const quickSortMain = (arr) => {
    arr = quickSort(arr);
    const pivotIdx = arr.pop();

    return quickSortHelper(arr, pivotIdx);
}

console.log(quickSortMain([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
console.log(quickSortMain([3, 7, 8, 5, 2, 1, 9, 5, 4]))
console.log(quickSortMain([6, 5, 3, 1, 8, 7, 2, 4]))
