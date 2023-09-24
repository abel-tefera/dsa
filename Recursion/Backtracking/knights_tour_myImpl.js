import cloneDeep from "lodash.clonedeep";

const main = (N = 8) => {

    debugger;

    const visited = new Array(N).fill(null).map((_) => new Array(N).fill(-1));

    visited[0][0] = 0;
   
    // const path = new Array(N).fill(null).map((_) => new Array(N).fill(-1));
    // path[0][0] = 0;
   
    const path = cloneDeep(visited);

    const iOffsets = [2, 1, -1, -2, -2, -1, 1, 2];
    const jOffsets = [1, 2, 2, 1, -1, -2, -2, -1];
    // const iOffsets = [-1, -2, -2, -1, 1, 2, 2, 1];
    // const jOffsets = [-2, -1, 1, 2, -2, 1, 2, 2];

    const isValidCell = ([i, j]) => {
        return (i >= 0 && i < visited.length) && (j >= 0 && j < visited.length) && (visited[i][j] === -1);
    }

    const knightTour = (currX = 0, currY = 0, move = 1) => {

        if (move == N * N) {
            return true;
        }

        for (let i = 0; i < 8; i++) {
            const offset = [currX + iOffsets[i], currY + jOffsets[i]];

            if (isValidCell(offset)) {
                path[offset[0]][offset[1]] = move;
                visited[offset[0]][offset[1]] = true;

                if (knightTour(offset[0], offset[1], move + 1)) {
                    return true;
                } else {
                    visited[offset[0]][offset[1]] = -1;
                }

            }
        }
        return false;
    }

    return { func: knightTour, res: path };
}

const closure = main();
closure.func();
closure.res.forEach((el, _) => {
    console.log(el.join("\t"))
})