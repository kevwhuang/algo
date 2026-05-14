// 999. Available Captures for Rook

function numRookCaptures(board) {
    let res = 0;
    const D = [0, -1, 0, 1, 0];
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (board[x][y] !== 'R') continue;
            for (let i = 0; i < 4; i++) {
                let xx = x + D[i], yy = y + D[i + 1];
                while (~xx && xx < 8 && ~yy && yy < 8) {
                    const s = board[xx][yy];
                    if (s === 'B' || s === 'p' && ++res) break;
                    xx += D[i], yy += D[i + 1];
                }
            }
            return res;
        }
    }
}
