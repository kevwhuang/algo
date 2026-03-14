// 3342 - Find Minimum Time to Reach Last Room II

function minTimeToReach(moveTime) {
    const m = moveTime.length, n = moveTime[0].length;
    const costs = Array.from({ length: m }, () => new Uint32Array(n).fill(-1));
    costs[0][0] = 0;
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    pq.enqueue([0, 0, 0, 1]);
    const d = [0, -1, 0, 1, 0], mm = m - 1, nn = n - 1;
    while (true) {
        const cur = pq.dequeue();
        for (let i = 0; i < 4; i++) {
            const r = cur[0] + d[i], c = cur[1] + d[i + 1];
            if (r === -1 || r === m || c === -1 || c === n) continue;
            const next = Math.max(cur[2], moveTime[r][c]) + cur[3];
            if (next >= costs[r][c]) continue;
            if (r === mm && c === nn) return next;
            costs[r][c] = next;
            pq.enqueue([r, c, next, cur[3] === 1 ? 2 : 1]);
        }
    }
}
