// 373 - Find K Pairs With Smallest Sums

function kSmallestPairs(nums1, nums2, k) {
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    const min = Math.min(k, nums1.length);
    for (let i = 0; i < min; i++) {
        pq.enqueue([i, 0, nums1[i] + nums2[0]]);
    }
    const res = new Array(k);
    for (let i = 0; i < k; i++) {
        const a = pq.front()[0], b = pq.dequeue()[1] + 1;
        res[i] = [nums1[a], nums2[b - 1]];
        if (b === nums2.length) continue;
        pq.enqueue([a, b, nums1[a] + nums2[b]]);
    }
    return res;
}
