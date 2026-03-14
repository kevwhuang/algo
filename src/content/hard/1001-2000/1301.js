// 1301 - Number of Paths With Max Score

function pathsWithMaxScore(board) {
    const n = board.length;
    const dp1 = Array.from({ length: n }, () => new Uint16Array(n));
    const dp2 = Array.from({ length: n }, () => new Uint32Array(n));
    dp2[0][0] = 1;
    const D1 = [-1, -1, 0], D2 = [-1, 0, -1];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'X') continue;
            let max = 0, acc = 0, i = -1;
            while (++i < 3) {
                const rr = r + D1[i], cc = c + D2[i];
                if (rr < 0 || cc < 0) continue;
                const cur = dp1[rr][cc];
                if (cur > max) max = cur, acc = dp2[rr][cc];
                else if (cur === max) acc += dp2[rr][cc];
            }
            if (acc === 0) continue;
            dp1[r][c] = (Number(board[r][c]) || 0) + max;
            dp2[r][c] = acc % 1000000007;
        }
    }
    return [dp1[n - 1][n - 1], dp2[n - 1][n - 1]];
}
