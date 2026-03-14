// 2503 - Maximum Number of Points From Grid Queries

function maxPoints(grid, queries) {
    const M = grid, m = M.length, n = M[0].length, nn = queries.length;
    const arr = Array.from({ length: nn }, (_, i) => i);
    arr.sort((a, b) => queries[a] - queries[b]);
    const pq = new PriorityQueue((a, b) => M[a[0]][a[1]] - M[b[0]][b[1]]);
    pq.enqueue([0, 0]);
    const seen = Array.from({ length: m }, () => new Uint8Array(n));
    seen[0][0] = 1;
    const D = [0, -1, 0, 1, 0];
    let acc = 0, i = 0;
    while (i < nn && pq.size()) {
        const r = pq.front()[0], c = pq.dequeue()[1], cur = M[r][c];
        for (let j = 0; j < 4; j++) {
            const rr = r + D[j], cc = c + D[j + 1];
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            if (seen[rr][cc]) continue;
            seen[rr][cc] = 1;
            pq.enqueue([rr, cc]);
        }
        while (i < nn && queries[arr[i]] <= cur) queries[arr[i++]] = acc;
        acc++;
    }
    while (i < nn) queries[arr[i++]] = acc;
    return queries;
}
