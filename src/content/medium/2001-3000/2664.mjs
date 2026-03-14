// 2664 - The Knight's Tour

function tourOfKnight(m, n, r, c) {
    function dfs(r, c, move) {
        if (board[r][c] >= 0) return;
        board[r][c] = move;
        if (move === tgt) return true;
        for (let i = 0; i < 8; i++) {
            const rr = r + dr[i], cc = c + dc[i];
            if (rr < 0 || rr >= m || cc < 0 || cc >= n) continue;
            if (dfs(rr, cc, move + 1)) return true;
        }
        board[r][c] = -1;
    }
    const board = Array.from({ length: m }, () => new Array(n).fill(-1));
    const tgt = m * n - 1;
    const dr = [-2, -2, -1, -1, 1, 1, 2, 2];
    const dc = [-1, 1, -2, 2, -2, 2, -1, 1];
    dfs(r, c, 0);
    return board;
}
