// 2022 - Convert 1D Array Into 2D Array

function construct2DArray(original, m, n) {
    if (original.length !== m * n) return [];
    const res = [];
    for (let i = 0; i < m; i++) {
        res[i] = original.slice(i * n, (i + 1) * n);
    }
    return res;
}
