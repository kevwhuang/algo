// 59 - Spiral Matrix II

function generateMatrix(n) {
    const mat = Array.from({ length: n }, () => new Array(n));
    const bound = n * n + 1;
    let i = 1, r = 0, c = -1;
    while (true) {
        while (true) {
            mat[r][++c] = i++;
            if (c === n - 1 || mat[r][c + 1]) break;
        }
        if (i === bound) return mat;
        while (true) {
            mat[++r][c] = i++;
            if (r === n - 1 || mat[r + 1][c]) break;
        }
        if (i === bound) return mat;
        while (true) {
            mat[r][--c] = i++;
            if (c === 0 || mat[r][c - 1]) break;
        }
        if (i === bound) return mat;
        while (true) {
            mat[--r][c] = i++;
            if (r === 0 || mat[r - 1][c]) break;
        }
        if (i === bound) return mat;
    }
}
