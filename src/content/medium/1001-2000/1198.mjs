// 1198. Find Smallest Common Element in All Rows

function smallestCommonElement(mat) {
    const M = mat, m = M.length, n = M[0].length;
    for (let y = 0; y < n; y++) {
        const tgt = M[0][y];
        let x = 0;
        while (++x < m) {
            const A = M[x];
            let l = 0, r = n - 1;
            while (l <= r) {
                const mm = l + r >> 1;
                if (M[x][mm] < tgt) l = mm + 1;
                else if (M[x][mm] > tgt) r = mm - 1;
                else l = 1000;
            }
            if (l !== 1000) break;
        }
        if (x === m) return tgt;
    }
    return -1;
}
