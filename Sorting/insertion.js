const insertionSort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let idx = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                idx = j;
            } else {
                break;
            }
        }
        if (idx !== i) {
            arr.splice(idx, 0, arr[i])
            arr.splice(i + 1, 1)
        }
    }
    return arr;
}

console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));