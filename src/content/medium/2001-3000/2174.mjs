// 2174 - Remove All Ones With Row and Column Flips II

function removeOnes(grid) {
    function dfs(ops = 0) {
        let min = MSI;
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) continue;
                if (rowsVisited.has(r) || colsVisited.has(c)) continue;
                rowsVisited.add(r);
                colsVisited.add(c);
                min = Math.min(dfs(ops + 1), min);
                rowsVisited.delete(r);
                colsVisited.delete(c);
            }
        }
        return min === MSI ? ops : min;
    }
    const MSI = Number.MAX_SAFE_INTEGER;
    const rowsVisited = new Set(), colsVisited = new Set();
    return dfs();
}
