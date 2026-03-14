// 3552 - Grid Teleportation Traversal

function minMoves(matrix) {
    if (!this.C) C = new Uint32Array(1000000), Q = new Array(1000000);
    const map = new Map(), M = matrix, m = M.length, n = M[0].length;
    if (M[m - 1][n - 1] === '#') return -1;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const key = n * r + c, s = M[r][c];
            C[key] = 1000000;
            if (s === '.' || s === '#') continue;
            if (!map.has(s)) map.set(s, []);
            map.get(s).push(key);
        }
    }
    C[0] = Q[0] = 0;
    const tgt = m * n - 1, D = [0, -1, 0, 1, 0];
    let i = 0, j = 1;
    while (i < j) {
        const key = Q[i++], r = key / n >> 0, c = key % n, w = C[key];
        if (key === tgt) return w;
        const arr = map.get(M[r][c]);
        if (arr) {
            map.delete(M[r][c]);
            for (let k = 0; k < arr.length; k++) {
                C[arr[k]] = w, Q[--i] = arr[k];
            }
        }
        for (let k = 0; k < 4; k++) {
            const rr = r + D[k], cc = c + D[k + 1];
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            if (M[rr][cc] === '#') continue;
            const next = n * rr + cc;
            if (C[next] > w + 1) C[next] = w + 1, Q[j++] = next;
        }
    }
    return -1;
}
