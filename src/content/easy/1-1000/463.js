// 463 - Island Perimeter

function islandPerimeter(grid) {
    let res = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            if (r === 0 || grid[r - 1][c] === 0) res++;
            if (r + 1 === m || grid[r + 1][c] === 0) res++;
            if (c === 0 || grid[r][c - 1] === 0) res++;
            if (c + 1 === n || grid[r][c + 1] === 0) res++;
        }
    }
    return res;
}
