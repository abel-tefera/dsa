function visitNeighborsBFS(map, visited, [row, col]) {
    let rowOffsets = [-1, 0, 0, 1];
    let colOffsets = [0, -1, 1, 0];
    let toBeVisitedQueue = [[row, col]];
    visited[row][col] = true;

    function isValidNeighbor(map, rowInput, colInput, visited) {
        return (rowInput >= 0 && rowInput < visited.length) && (colInput >= 0 && visited[0].length) && (map[rowInput][colInput] === 1 && !visited[rowInput][colInput]);
    }

    while (toBeVisitedQueue.length !== 0) {
        let [currentRow, currentCol] = toBeVisitedQueue.shift();
        for (let i = 0; i < rowOffsets.length; i++) {
            if (isValidNeighbor(map, currentRow + rowOffsets[i], currentCol + colOffsets[i], visited)) {
                visited[currentRow + rowOffsets[i]][currentCol + colOffsets[i]] = true;
                toBeVisitedQueue.push([currentRow + rowOffsets[i], currentCol + colOffsets[i]]);
            }
        }
    }
}

function islandCount(map) {
    debugger;
    let islands = 0;
    let visited = new Array(map.length).fill(false).map((_) => new Array(map[0].length).fill(false));
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[0].length; col++) {
            if (map[row][col] === 1 && !visited[row][col]) {
                visitNeighborsBFS(map, visited, [row, col]);
                islands++;
            }
        }

    }
    return islands;
}

const arr1 = [[0, 1],
[1, 0]]; // 2

const arr2 = [[0, 1, 0],
[1, 0, 1],
[0, 1, 0]]; //4


const arr3 = [[0, 1, 0],
[1, 1, 1],
[0, 1, 0]]; // 1

const arr4 = [[0, 1, 0],
[0, 0, 0],
[0, 1, 0]]; // 2


console.log(islandCount(arr1) === 2);
console.log(islandCount(arr2) === 4);
console.log(islandCount(arr3) === 1);
console.log(islandCount(arr4) === 2);