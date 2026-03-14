// 2852 - Sum of Remoteness of All Cells

function sumRemoteness(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid[r][c] === -1) return;
        localSum += grid[r][c];
        localArea++;
        grid[r][c] = -1;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    let area = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== -1) area++;
        }
    }
    let sum = 0, localSum, localArea;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === -1) continue;
            localSum = localArea = 0;
            dfs(r, c);
            sum += localSum * (area - localArea);
        }
    }
    return sum;
}
