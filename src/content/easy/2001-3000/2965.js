// 2965 - Find Missing and Repeated Values

function findMissingAndRepeatedValues(grid) {
    const len = grid.length;
    const arr = new Array(len * len + 1).fill(0);
    for (let r = 0; r < len; r++) {
        for (let c = 0; c < len; c++) {
            arr[grid[r][c]]++;
        }
    }
    const res = [];
    for (let n = 1; n < arr.length; n++) {
        if (arr[n] === 0) res[1] = n;
        else if (arr[n] === 2) res[0] = n;
    }
    return res;
}
