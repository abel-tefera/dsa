const quickSort = (arr) => {
    let length = arr.length;
    const pivot = arr[length - 1];
    let leftIndex = 0;
    let rightIndex = length - 1;

    while (leftIndex < rightIndex) {
        let temp;
        if (arr[leftIndex] > pivot) {
            temp = arr[rightIndex];

            arr[rightIndex] = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex - 1];
            arr[rightIndex - 1] = temp;

            rightIndex -= 1;
        } else {
            leftIndex += 1;
        }
    }

    return [...arr, rightIndex];
}

const quickSortHelper = (arr, pivotIdx = null) => {
    if (arr.length <= 1) {
        return arr
    } else if (pivotIdx === null) {
        debugger;
        arr = quickSort(arr);
        pivotIdx = arr.pop();
    };

    let left, right, leftIdx, rightIdx;
    left = arr.slice(0, pivotIdx);
    right = arr.slice(pivotIdx + 1);

    if (left.length > 0) {
        left = quickSort(left);
        leftIdx = left.pop();
    }

    if (right.length > 0) {
        right = quickSort(right);
        rightIdx = right.pop();
    }

    const leftDone = quickSortHelper(left, leftIdx);
    const rightDone = quickSortHelper(right, rightIdx);

    leftDone.push(arr[pivotIdx], ...rightDone);
    return leftDone;
}

// console.log(quickSortHelper([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
// console.log(quickSortHelper([3, 7, 8, 5, 2, 1, 9, 5, 4]))
// console.log(quickSortHelper([6, 5, 3, 1, 8, 7, 2, 4]))

// const exArr = [...Array(10000)].map(() => Math.floor(Math.random() * 50000));

// console.time("Quick");
// quickSortHelper(exArr);
// console.timeEnd("Quick");

export { quickSortHelper }