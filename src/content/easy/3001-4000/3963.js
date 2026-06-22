// 3963. Create Grid With Exactly One Path

function createGrid(m, n) {
    const res = new Array(m);
    res[0] = '.'.repeat(n);
    for (let x = 1; x < m; x++) {
        res[x] = `${'#'.repeat(n - 1)}.`;
    }
    return res;
}
