// 3672 - Sum of Weighted Modes in Subarrays

function modeWeight(nums, k) {
    if (!this.B) B = new Uint32Array(100001);
    B.fill();
    let res = 0;
    const pq = new PriorityQueue((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let i = 0; i < nums.length; i++) {
        pq.enqueue([++B[nums[i]], nums[i]]);
        if (i < k - 1) continue;
        while (pq.front()[0] !== B[pq.front()[1]]) pq.dequeue();
        res += pq.front()[0] * pq.front()[1];
        B[nums[i - k + 1]]--;
    }
    return res;
}
