// 361 - Bomb Enemy

function maxKilledEnemies(grid) {
    const M = grid, m = M.length, n = M[0].length, max = Math.max;
    const B = Array.from({ length: m }, () => new Uint16Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== '0' || B[r][c]) continue;
            let acc = 0, i = r - 1, j = r + 1;
            while (~i && M[i][c] !== 'W') if (M[i--][c] === 'E') acc++;
            while (j < m && M[j][c] !== 'W') if (M[j++][c] === 'E') acc++;
            while (++i < j) B[i][c] = acc;
        }
    }
    let res = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== '0') continue;
            let acc = 0, i = c - 1, j = c + 1;
            while (~i && M[r][i] !== 'W') if (M[r][i--] === 'E') acc++;
            while (j < n && M[r][j] !== 'W') if (M[r][j++] === 'E') acc++;
            while (++i < j) if (M[r][i] === '0') res = max(acc + B[r][i], res);
            c = j;
        }
    }
    return res;
}
