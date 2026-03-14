// 1958 - Check If Move Is Legal

function checkMove(board, rMove, cMove, color) {
    const validate = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
    const anti = color === 'B' ? 'W' : 'B';
    const dr = [-1, -1, -1, 0, 0, 1, 1, 1], dc = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let i = 0; i < 8; i++) {
        let count = 0, r = rMove + dr[i], c = cMove + dc[i];
        while (validate(r, c) && board[r][c] === anti) {
            count++, r += dr[i], c += dc[i];
        }
        if (count && validate(r, c) && board[r][c] === color) return true;
    }
    return false;
}
