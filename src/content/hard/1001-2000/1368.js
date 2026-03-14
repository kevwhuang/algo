// 1368 - Minimum Cost to Make at Least One Valid Path in a Grid

function minCost(grid) {
    const M = grid, m = M.length, n = M[0].length, mm = m - 1, nn = n - 1;
    const C = { 0: 0 }, D = [0, -1, 0, 1, 0], dict = [2, 4, 1, 3];
    const pq = new PriorityQueue((a, b) => a[2] - b[2]);
    pq.enqueue([0, 0, 0]);
    while (true) {
        const r = pq.front()[0], c = pq.front()[1], w = pq.dequeue()[2];
        if (r === mm && c === nn) return w;
        for (let i = 0; i < 4; i++) {
            const rr = r + D[i], cc = c + D[i + 1];
            if (rr < 0 || rr > mm || cc < 0 || cc > nn) continue;
            const key = n * rr + cc, next = w + (M[r][c] !== dict[i]);
            if (C[key] <= next) continue;
            C[key] = next;
            pq.enqueue([rr, cc, next]);
        }
    }
}
