// 3988. Create Grid With Exactly K Paths I

function createGrid(m, n, k) {
    function fn(mm, nn, flag) {
        if (mm > m || nn > n || Math.max(mm, nn) + (flag ? 1 : 0) !== k) return;
        for (let x = 0; x < mm; x++) {
            for (let y = 0; y < nn; y++) {
                res[x][y] = '.';
            }
        }
        for (let x = mm; x < m; x++) {
            res[x][nn - 1] = '.';
        }
        for (let y = nn - 1; y < n; y++) {
            res[m - 1][y] = '.';
        }
        if (flag) res[0][2] = res[2][0] = '#';
        res.forEach((e, i) => res[i] = e.join``);
        return true;
    }
    const res = Array.from({ length: m }, () => new Array(n).fill('#'));
    const M = [[1, 1], [2, 2], [2, 3], [3, 2], [2, 4], [3, 3, true], [4, 2]];
    return M.some(e => fn(...e)) ? res : [];
}
