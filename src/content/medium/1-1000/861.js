// 861 - Score After Flipping Matrix

function matrixScore(grid) {
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        if (grid[r][0] === 1) continue;
        for (let c = 0; c < n; c++) {
            grid[r][c] ^= 1;
        }
    }
    let score = 0;
    for (let c = 0, count, factor = 2 ** (n - 1); c < n; c++) {
        count = 0;
        for (let r = 0; r < m; r++) {
            grid[r][c] && count++;
        }
        score += factor * Math.max(m - count, count);
        factor /= 2;
    }
    return score;
}
