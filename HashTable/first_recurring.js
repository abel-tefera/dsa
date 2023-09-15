const firstRecurring = (arr) => {
    const map = {};
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]]) return arr[i];
        map[arr[i]] = true;
    }
    return undefined;
}

console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]))
// 2
