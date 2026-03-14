// 130 - Surrounded Regions

function solve(board) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (M[r][c] !== 'O') return;
        M[r][c] = null;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const M = board, m = M.length, n = M[0].length;
    M.forEach((_, r) => dfs(r, 0) || dfs(r, n - 1));
    M[0].forEach((_, c) => dfs(0, c) || dfs(m - 1, c));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === 'O') M[r][c] = 'X';
            else M[r][c] ??= 'O';
        }
    }
}
