// 999 - Available Captures for Rook

function numRookCaptures(board) {
    let row, col;
    loop: for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c] !== 'R') continue;
            row = r, col = c;
            break loop;
        }
    }
    let captures = 0;
    for (let r = row - 1; r >= 0; r--) {
        if (board[r][col] === '.') continue;
        if (board[r][col] === 'p') captures++;
        break;
    }
    for (let r = row + 1; r < 8; r++) {
        if (board[r][col] === '.') continue;
        if (board[r][col] === 'p') captures++;
        break;
    }
    for (let c = col - 1; c >= 0; c--) {
        if (board[row][c] === '.') continue;
        if (board[row][c] === 'p') captures++;
        break;
    }
    for (let c = col + 1; c < 8; c++) {
        if (board[row][c] === '.') continue;
        if (board[row][c] === 'p') captures++;
        break;
    }
    return captures;
}
