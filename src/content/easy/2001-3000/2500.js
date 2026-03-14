// 2500 - Delete Greatest Value in Each Row

function deleteGreatestValue(grid) {
    let res = 0, m = grid.length, n = grid[0].length;
    while (n) {
        let largest = 0;
        for (let r = 0; r < m; r++) {
            let max = 0, col;
            for (let c = 0; c < n; c++) {
                if (grid[r][c] <= max) continue;
                max = grid[r][c], col = c;
            }
            grid[r].splice(col, 1);
            largest = Math.max(max, largest);
        }
        res += largest, n--;
    }
    return res;
}
