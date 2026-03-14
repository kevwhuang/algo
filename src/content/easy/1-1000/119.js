// 119 - Pascal's Triangle II

function getRow(rowIndex) {
    let cur = [1];
    while (rowIndex--) {
        const n = cur.length;
        const next = new Uint32Array(n + 1);
        for (let i = 1; i < n; i++) {
            next[i] = cur[i - 1] + cur[i];
        }
        cur = next, next[0] = next[n] = 1;
    }
    return cur;
}
