// 3239 - Minimum Number of Flips to Make Binary Grid Palindromic I

function minFlips(grid) {
    let flips1 = 0, flips2 = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cur = grid[r][c], rr = m - r - 1, cc = n - c - 1;
            if (r < rr && cur !== grid[rr][c]) flips1++;
            if (c < cc && cur !== grid[r][cc]) flips2++;
        }
    }
    return Math.min(flips1, flips2);
}
