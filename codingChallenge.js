const moveZeros = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            arr.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    return arr;
}

let nums = [0,1,0,3,12];
console.log(moveZeros(nums)); // [1,3,12,0,0] 