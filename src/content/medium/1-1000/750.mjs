// 750 - Number of Corner Rectangles

function countCornerRectangles(grid) {
    let res = 0;
    const M = grid, m = M.length, n = M[0].length;
    const dp = Array.from({ length: n }, () => new Uint8Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === 0) continue;
            for (let cc = c + 1; cc < n; cc++) {
                if (M[r][cc]) res += dp[c][cc]++;
            }
        }
    }
    return res;
}
