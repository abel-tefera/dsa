const selectionSort = (arr) => {
    let min = Number.POSITIVE_INFINITY;
    let tempIdx = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        min = Number.POSITIVE_INFINITY;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                tempIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = min;
        arr[tempIdx] = temp
    }
    return arr;
}

// console.log(selectionSort([6, 5, 3, 1, 8, 7, 2, 4]))
export { selectionSort }
