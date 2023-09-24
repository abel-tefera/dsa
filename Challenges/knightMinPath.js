// const visitNeighborsBFS = (map, visited, [i, j], count = 0) => {
//     let iOffsets = [-1, -2, -2, -1, 1, 2, 2, 1];
//     let jOffsets = [-2, -1, 1, 2, -2, 1, 2, 2];
//     let queue = [[i, j]];
//     visited[i][j] = true;

//     const isValidCell = (i, j, visited) => {
//         return (i >= 0 && i < visited.length) && (j >= 0 && j < visited.length) && (!visited[rowInput][colInput]);
//     }

//     for (let idx = 0; idx < iOffsets.length; i++) {
//         let [currentRow, currentCol] = queue.shift();
//         if (isValidCell(currentRow + iOffsets[idx], currentCol + jOffsets[idx], visited)) {
//             visited[currentRow + iOffsets[idx]][currentCol + jOffsets[i]] = true;
//             queue.push([currentRow + iOffsets[i], currentCol + jOffsets[i]]);
//             count += 1;
//         }
//     }
// }

// const knightMinPath = ([startX, startY], [endX, endY]) => {
//     const size = 8;
//     const visited = new Array(size).fill(false).map((_) => new Array(size).fill(false));
//     for (let i = 0; i < size.length; i++) {
//         for (let j = 0; j < size.length; j++) {

//         }
//     }
// }

function knightMinPath([startX, startY], [endX, endY]) {
    debugger;
    let moveOffsets = [[-2, -1], [-1, -2], [-2, 1], [-1, 2], [1, 2], [2, 1], [1, -2], [2, -1]];

    let visited = [];
    let queue = [];
    queue.push([startX, startY, 0]); // x, y, dist

    while (queue.length !== 0) {
        let [currX, currY, currDist] = queue.shift(); // if I use pop instead of shift I will get max steps needed.
        if (currX === endX && currY === endY) {
            return currDist;
        }
        if (!visited.some(([elX, elY, _]) => elX === currX && elY === currY)) {
            visited.push([currX, currY, currDist]);
            for (let [xOffset, yOffset] of moveOffsets) {
                let newX = currX + xOffset;
                let newY = currY + yOffset;
                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                    queue.push([newX, newY, currDist + 1]);
                }
            }
        }
    }
    return -1;
}

console.log(knightMinPath([0, 7], [7, 0]), 6);
console.log(knightMinPath([3, 3], [1, 4]), 1);
console.log(knightMinPath([3, 3], [0, 6]), 2);

// console.log(knightMinPath([0, 7], [7, 0])); // should print 6
// console.log(knightMinPath([3, 3], [1, 4])); // should print 1
// console.log(knightMinPath([3, 3], [0, 6])); // should print 2