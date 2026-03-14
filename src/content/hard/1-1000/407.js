// 407 - Trapping Rain Water II

function trapRainWater(heightMap) {
    const M = heightMap, m = M.length, n = M[0].length;
    const pq = new PriorityQueue((a, b) => a[2] - b[2]);
    for (let r = 1; r < m - 1; r++) {
        pq.enqueue([r, 0, M[r][0]]);
        pq.enqueue([r, n - 1, M[r][n - 1]]);
        M[r][0] = M[r][n - 1] = -1;
    }
    for (let c = 0; c < n; c++) {
        pq.enqueue([0, c, M[0][c]]);
        pq.enqueue([m - 1, c, M[m - 1][c]]);
        M[0][c] = M[m - 1][c] = -1;
    }
    let res = 0, max = 0;
    const D = [0, -1, 0, 1, 0];
    while (pq.size()) {
        max = Math.max(pq.front()[2], max);
        const r = pq.front()[0], c = pq.dequeue()[1];
        for (let i = 0; i < 4; i++) {
            const rr = r + D[i], cc = c + D[i + 1];
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            const cur = M[rr][cc];
            if (cur < 0) continue;
            if (cur < max) res += max - cur;
            pq.enqueue([rr, cc, cur]);
            M[rr][cc] = -1;
        }
    }
    return res;
}
