// 419 - Battleships in a Board

function countBattleships(board) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (board[r][c] === '.') return;
        board[r][c] = '.';
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = board.length, n = board[0].length;
    let ships = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            board[r][c] === 'X' && ++ships && dfs(r, c);
        }
    }
    return ships;
}
