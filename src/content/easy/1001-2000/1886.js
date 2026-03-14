// 1886 - Determine Whether Matrix Can Be Obtained by Rotation

function findRotation(mat, target) {
    let flag1 = true, flag2 = true, flag3 = true, flag4 = true;
    const m = mat.length, n = mat[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cur = mat[r][c];
            if (flag1 && cur !== target[r][c]) flag1 = false;
            if (flag2 && cur !== target[c][m - r - 1]) flag2 = false;
            if (flag3 && cur !== target[m - r - 1][n - c - 1]) flag3 = false;
            if (flag4 && cur !== target[n - c - 1][r]) flag4 = false;
        }
    }
    return flag1 || flag2 || flag3 || flag4;
}
