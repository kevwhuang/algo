// 37 - Sudoku Solver

function solveSudoku(board) {
    function backtrack(i) {
        if (i === M.length) return true;
        const r = M[i][0], c = M[i][1], idx = M[i][2];
        for (let j = 0; j <= 8; j++) {
            const mask = 1 << j;
            if (seen[r] & mask || seen[c] & mask || seen[idx] & mask) continue;
            res[i] = j, seen[r] |= mask, seen[c] |= mask, seen[idx] |= mask;
            if (backtrack(i + 1)) return true;
            seen[r] ^= mask, seen[c] ^= mask, seen[idx] ^= mask;
        }
    }
    const M = [], seen = new Uint16Array(27);
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const idx = 3 * (r / 3 >> 0) + (c / 3 >> 0) + 18;
            if (board[r][c] === '.' && M.push([r, c + 9, idx])) continue;
            const mask = 1 << board[r][c] - 1;
            seen[r] |= mask, seen[c + 9] |= mask, seen[idx] |= mask;
        }
    }
    const res = new Array(M.length);
    backtrack(0);
    res.forEach((e, i) => board[M[i][0]][M[i][1] - 9] = String(e + 1));
}
