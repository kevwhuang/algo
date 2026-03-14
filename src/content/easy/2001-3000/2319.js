// 2319 - Check If Matrix Is X-Matrix

function checkXMatrix(grid) {
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const isDiag = r === c || n - r - 1 === c;
            if (isDiag && !grid[r][c]) return false;
            if (!isDiag && grid[r][c]) return false;
        }
    }
    return true;
}
