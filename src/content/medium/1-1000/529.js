// 529 - Minesweeper

function updateBoard(board, click) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (board[r][c] !== 'E') return;
        const mines = detectMines(r, c);
        board[r][c] = mines ? String(mines) : 'B';
        if (board[r][c] !== 'B') return;
        for (let i = 0; i < 8; i++) {
            dfs(r + dr[i], c + dc[i]);
        }
    }
    function detectMines(r, c) {
        let mines = 0;
        for (let i = 0; i < 8; i++) {
            if (board[r + dr[i]]?.[c + dc[i]] === 'M') mines++;
        }
        return mines;
    }
    const m = board.length, n = board[0].length;
    const [row, col] = click;
    const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dc = [-1, 0, 1, -1, 1, -1, 0, 1];
    if (board[row][col] === 'M') {
        board[row][col] = 'X';
    } else {
        const mines = detectMines(row, col);
        if (mines > 0) board[row][col] = String(mines);
        else dfs(row, col);
    }
    return board;
}
