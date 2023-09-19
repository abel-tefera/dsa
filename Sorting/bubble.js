const bubbleSort = (arr) => {
    let repeat = true;
    while (repeat) {
        repeat = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                repeat = true;
            }
        }
    }

    return arr;

};

console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]))
console.log(bubbleSort([3, 7, 8, 5, 2, 1, 9, 5, 4]))