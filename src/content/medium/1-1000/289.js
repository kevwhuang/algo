// 289 - Game of Life

function gameOfLife(board) {
    function neighbors(r, c) {
        let live = 0;
        for (let i = 0; i < 8; i++) {
            const rr = r + dr[i], cc = c + dc[i];
            if (validate(rr, cc) && board[rr][cc] >= 1) live++;
        }
        return live;
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = board.length, n = board[0].length;
    const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dc = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 1) {
                const live = neighbors(r, c);
                if (live !== 2 && live !== 3) board[r][c] = 2;
            } else if (board[r][c] === 0) {
                if (neighbors(r, c) === 3) board[r][c] = -1;
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === -1) board[r][c] = 1;
            else if (board[r][c] === 2) board[r][c] = 0;
        }
    }
}
