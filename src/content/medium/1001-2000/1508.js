// 1508 - Range Sum of Sorted Subarray Sums

function rangeSum(nums, n, left, right) {
    const pq = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
    for (let i = 0; i < n; i++) {
        pq.enqueue([nums[i], i]);
    }
    let sum = 0;
    const mod = 1000000007;
    for (let i = 1; i <= right; i++) {
        const head = pq.dequeue();
        if (i >= left) sum = (sum + head[0]) % mod;
        const j = head[1] + 1;
        if (j === n) continue;
        pq.enqueue([head[0] + nums[j], j]);
    }
    return sum;
}
