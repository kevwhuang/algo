// 688 - Knight Probability in Chessboard

function knightProbability(n, k, row, column) {
    let dp = Array.from({ length: n }, () => new Uint8Array(n));
    dp[row][column] = 1;
    const dr = [-2, -2, -1, -1, 1, 1, 2, 2];
    const dc = [-1, 1, -2, 2, -2, 2, -1, 1];
    for (let i = 0; i < k; i++) {
        const N = Array.from({ length: n }, () => new Array(n).fill(0));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (dp[r][c] === 0) continue;
                for (let j = 0; j < 8; j++) {
                    const rr = r + dr[j], cc = c + dc[j];
                    if (rr < 0 || rr >= n || cc < 0 || cc >= n) continue;
                    N[rr][cc] += dp[r][c];
                }
            }
        }
        dp = N;
    }
    let sum = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            sum += dp[r][c];
        }
    }
    return sum / 8 ** k;
}
