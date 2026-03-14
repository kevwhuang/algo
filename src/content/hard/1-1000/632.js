// 632 - Smallest Range Covering Elements From K Lists

function smallestRange(nums) {
    const M = nums, n = nums.length;
    const arr = new Uint8Array(n);
    const pq = new PriorityQueue((a, b) => M[a][arr[a]] - M[b][arr[b]]);
    let right = -Infinity, i = -1;
    while (++i < n) {
        pq.enqueue(i);
        right = Math.max(M[i][0], right);
    }
    const res = [0, Infinity];
    while (true) {
        const j = pq.dequeue(), left = M[j][arr[j]];
        if (right - left < res[1] - res[0]) res[0] = left, res[1] = right;
        if (++arr[j] === M[j].length) break;
        pq.enqueue(j);
        right = Math.max(M[j][arr[j]], right);
    }
    return res;
}
