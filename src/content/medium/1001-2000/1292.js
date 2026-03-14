// 1292 - Maximum Side Length of a Square With Sum Less Than or Equal to Threshold

function maxSideLength(mat, threshold) {
    const m = mat.length, n = mat[0].length;
    for (let r = 1; r < m; r++) {
        mat[r][0] += mat[r - 1][0];
    }
    for (let c = 1; c < n; c++) {
        mat[0][c] += mat[0][c - 1];
    }
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            mat[r][c] += mat[r - 1][c] + mat[r][c - 1];
            mat[r][c] -= mat[r - 1][c - 1];
        }
    }
    let max = 0, l = 1, r = Math.min(m, n);
    while (l <= r) {
        let flag = false;
        const len = l + r >> 1;
        const bound1 = m - len + 1, bound2 = n - len + 1;
        for (let r = 0; r < bound1; r++) {
            for (let c = 0; c < bound2; c++) {
                const rr = r + len - 1, cc = c + len - 1;
                let sum = mat[rr][cc];
                if (r) sum -= mat[r - 1][cc];
                if (c) sum -= mat[rr][c - 1];
                if (r && c) sum += mat[r - 1][c - 1];
                if (sum > threshold) continue;
                flag = true;
                break;
            }
        }
        if (flag) {
            max = Math.max(len, max);
            l = len + 1;
        } else {
            r = len - 1;
        }
    }
    return max;
}
