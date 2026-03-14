// 3462 - Maximum Sum With at Most K Elements

function maxSum(grid, limits, k) {
    const M = grid, m = M.length, n = M[0].length;
    const arr = new Uint16Array(m).fill(n - 1);
    const pq = new PriorityQueue((a, b) => M[b][arr[b]] - M[a][arr[a]]);
    for (let r = 0; r < m; r++) {
        if (limits[r] === 0) continue;
        M[r] = new Uint32Array(M[r]).sort();
        pq.enqueue(r);
    }
    let res = 0;
    while (k--) {
        const r = pq.dequeue(), c = arr[r];
        res += M[r][c];
        if (n - c + 1 > limits[r]) continue;
        arr[r]--;
        pq.enqueue(r);
    }
    return res;
}
