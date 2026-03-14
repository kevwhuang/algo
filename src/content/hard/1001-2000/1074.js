// 1074 - Number of Submatrices That Sum to Target

function numSubmatrixSumTarget(matrix, target) {
    const M = matrix, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 1; c < n; c++) {
            M[r][c] += M[r][c - 1];
        }
    }
    let res = 0;
    for (let c = 0; c < n; c++) {
        for (let cc = c; cc < n; cc++) {
            let acc = 0;
            const map = new Map([[0, 1]]);
            for (let r = 0; r < m; r++) {
                acc += M[r][cc] - (c ? M[r][c - 1] : 0);
                res += map.get(acc - target) ?? 0;
                map.set(acc, (map.get(acc) ?? 0) + 1);
            }
        }
    }
    return res;
}
