// 218 - The Skyline Problem

function getSkyline(buildings) {
    const M = buildings, n = M.length;
    const arr = new Uint32Array(n + n);
    for (let i = 0, j = 0; j < n; j++) {
        arr[i++] = M[j][0], arr[i++] = M[j][1];
    }
    arr.sort();
    const res = [];
    const pq = new PriorityQueue((a, b) => M[b][2] - M[a][2]);
    for (let i = 0, j = 0; i < arr.length; i++) {
        const cur = arr[i];
        if (i && arr[i - 1] === cur) continue;
        while (j < n && M[j][0] <= cur) pq.enqueue(j++);
        while (pq.size() && M[pq.front()][1] <= cur) pq.dequeue();
        const next = pq.size() ? M[pq.front()][2] : 0;
        if (res.length === 0 || res.at(-1)[1] !== next) res.push([cur, next]);
    }
    return res;
}
