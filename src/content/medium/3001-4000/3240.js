// 3240 - Minimum Number of Flips to Make Binary Grid Palindromic II

function minFlips(grid) {
    const count = (a, b) => a ^ b ? count10++ : a & b && count11++;
    const M = grid, m = M.length, n = M[0].length;
    const midM = m >> 1, midN = n >> 1;
    let flips = Number(m % 2 && n % 2 && M[midM][midN]);
    for (let r = 0; r < midM; r++) {
        for (let c = 0; c < midN; c++) {
            const rr = m - r - 1, cc = n - c - 1;
            const ones = (M[r][c] + M[r][cc] + M[rr][c] + M[rr][cc]) % 4;
            if (ones) flips += ones === 2 ? 2 : 1;
        }
    }
    let count10 = 0, count11 = 0;
    if (n % 2) {
        for (let r = 0; r < midM; r++) {
            count(M[r][midN], M[m - r - 1][midN]);
        }
    }
    if (m % 2) {
        for (let c = 0; c < midN; c++) {
            count(M[midM][c], M[midM][n - c - 1]);
        }
    }
    return flips + (!count10 & count11 % 2 ? 2 : count10);
}
