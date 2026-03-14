// 36 - Valid Sudoku

function isValidSudoku(board) {
    function check(r, c, seen) {
        if (board[r][c] === '.') return;
        if (seen.has(board[r][c])) return true;
        seen.add(board[r][c]);
    }
    for (let seen, c, r = 0; r < 9; r++) {
        seen = new Set(), c = -1;
        while (++c < 9) if (check(r, c, seen)) return false;
        seen = new Set(), c = -1;
        while (++c < 9) if (check(c, r, seen)) return false;
        seen = new Set();
        const rr = 3 * r % 9, cc = r - rr / 3;
        for (let dr = 0; dr < 3; dr++) {
            for (let dc = 0; dc < 3; dc++) {
                if (check(rr + dr, cc + dc, seen)) return false;
            }
        }
    }
    return true;
}
