// 2577 - Minimum Time to Visit a Cell in a Grid

function minimumTime(grid) {
    const M = grid, m = M.length, n = M[0].length, mm = m - 1, nn = n - 1;
    if (M[0][1] > 1 && M[1][0] > 1) return -1;
    const C = Array.from({ length: m }, () => new Uint32Array(n));
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    pq.enqueue([0, 0, 0]);
    const D = [0, -1, 0, 1, 0];
    while (true) {
        const r = pq.front()[0], c = pq.front()[1], w = pq.dequeue()[2];
        for (let i = 0; i < 4; i++) {
            const rr = r + D[i], cc = c + D[i + 1];
            if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
            const cur = M[rr][cc];
            const next = Math.max(w + 1, (cur - w) % 2 ? cur : cur + 1);
            if (rr === mm && cc === nn) return next;
            if (next >= (C[rr][cc] || Infinity)) continue;
            C[rr][cc] = next;
            pq.enqueue([rr, cc, next]);
        }
    }
}
