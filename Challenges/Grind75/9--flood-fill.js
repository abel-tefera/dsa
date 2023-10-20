function floodFill(image, sr, sc, color) {
    const visited = new Array(image.length).fill(false).map((_) => new Array(image[0].length).fill(false));
    const currentColor = image[sr][sc];
    
    let rowOffsets = [-1, 0, 0, 1];
    let colOffsets = [0, -1, 1, 0];
    let toBeVisitedQueue = [[sr, sc]];
    
    function isSameColorNeighbor(rowInput, colInput) {
        return (rowInput >= 0 && rowInput < visited.length) && (colInput >= 0 && visited[0].length) && (image[rowInput][colInput] === currentColor && !visited[rowInput][colInput]);
    }

    while (toBeVisitedQueue.length !== 0) {
        let [currentRow, currentCol] = toBeVisitedQueue.shift();
        for (let i = 0; i < rowOffsets.length; i++) {
            if (isSameColorNeighbor(currentRow + rowOffsets[i], currentCol + colOffsets[i])) {
                visited[currentRow + rowOffsets[i]][currentCol + colOffsets[i]] = true;
                toBeVisitedQueue.push([currentRow + rowOffsets[i], currentCol + colOffsets[i]]);
                image[currentRow + rowOffsets[i]][currentCol + colOffsets[i]] = color;
            }
        }
    }

    image[sr][sc] = color;
    return image;
}

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
console.log(floodFill(image, 1, 1, 2));