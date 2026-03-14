// 1034 - Coloring a Border

function colorBorder(grid, row, col, color) {
    function dfs(r, c) {
        if (!validate(r, c)) return;
        if (grid[r][c] !== target) return;
        if (component.has(r) && component.get(r).has(c)) return;
        if (!component.has(r)) component.set(r, new Set());
        component.get(r).add(c);
        if (isBorder(r, c)) border.push([r, c]);
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    function isBorder(r, c) {
        if (r === 0 || r === m - 1 || c === 0 || c === n - 1) return true;
        if (validate(r - 1, c) && grid[r - 1][c] !== target) return true;
        if (validate(r + 1, c) && grid[r + 1][c] !== target) return true;
        if (validate(r, c - 1) && grid[r][c - 1] !== target) return true;
        if (validate(r, c + 1) && grid[r][c + 1] !== target) return true;
        return false;
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = grid.length, n = grid[0].length;
    const target = grid[row][col];
    const component = new Map();
    const border = [];
    if (target === color) return grid;
    dfs(row, col);
    for (let i = 0; i < border.length; i++) {
        grid[border[i][0]][border[i][1]] = color;
    }
    return grid;
}
