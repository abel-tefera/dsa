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

const exArr = [...Array(10000)].map(() => Math.floor(Math.random() * 50000));

console.time("Insertion");
insertionSort(exArr);
console.timeEnd("Insertion");
