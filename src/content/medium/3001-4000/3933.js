// 3933. Largest Local Values in a Matrix II

function countLocalMaximums(matrix) {
    const fn = (d, x, y) => x >= 0 && y >= 0 ? pre[d + n * x + y] : 0;
    if (!this.seen) seen = new Uint8Array(201);
    if (!this.pre) pre = new Uint16Array(8e6);
    seen.fill();
    let res = 0;
    const min = Math.min, M = matrix, m = M.length, n = M[0].length;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            const a = M[x][y], d = 4e4 * (a - 1);
            if (a === 0) continue;
            if (seen[a] === 0) {
                seen[a] = 1;
                pre.fill(0, d, d + m * n);
                for (let xx = 0; xx < m; xx++) {
                    for (let yy = 0; yy < n; yy++) {
                        const i = d + n * xx + yy;
                        if (M[xx][yy] > a) pre[i] = 1;
                        if (yy) pre[i] += pre[i - 1];
                    }
                }
                for (let xx = 1; xx < m; xx++) {
                    for (let yy = 0; yy < n; yy++) {
                        const i = d + n * xx + yy;
                        pre[i] += pre[i - n];
                    }
                }
            }
            let sum = pre[d + n * min(x + a, m - 1) + min(y + a, n - 1)];
            sum += fn(d, x - a - 1, y - a - 1);
            sum -= fn(d, x - a - 1, min(y + a, n - 1));
            sum -= fn(d, min(x + a, m - 1), y - a - 1);
            sum -= x >= a && y >= a && M[x - a][y - a] > a;
            sum -= x >= a && y + a < n && M[x - a][y + a] > a;
            sum -= x + a < m && y >= a && M[x + a][y - a] > a;
            sum -= x + a < m && y + a < n && M[x + a][y + a] > a;
            res += sum === 0;
        }
    }
    return res;
}
