// 1851 - Minimum Interval to Include Each Query

function minInterval(intervals, queries) {
    const M = intervals.sort((a, b) => a[0] - b[0]);
    const arr = new Uint32Array(queries).sort();
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);
    const map = new Map();
    for (let i = 0, j = 0; i < arr.length; i++) {
        while (j < M.length && M[j][0] <= arr[i]) {
            pq.enqueue([M[j][1] - M[j][0] + 1, M[j++][1]]);
        }
        while (pq.size() && pq.front()[1] < arr[i]) pq.dequeue();
        if (pq.size()) map.set(arr[i], pq.front()[0]);
    }
    queries.forEach((e, i) => queries[i] = map.get(e) ?? -1);
    return queries;
}
