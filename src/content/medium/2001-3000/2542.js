// 2542 - Maximum Subsequence Score

function maxScore(nums1, nums2, k) {
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = [nums1[i], nums2[i]];
    }
    nums1.sort((a, b) => b[1] - a[1]);
    let score = 0, acc = 0;
    const heap = new PriorityQueue({ compare: (a, b) => a - b });
    for (let i = 0; i < nums1.length; i++) {
        if (i >= k) acc -= heap.dequeue();
        acc += nums1[i][0];
        heap.enqueue(nums1[i][0]);
        if (i > k - 2) score = Math.max(acc * nums1[i][1], score);
    }
    return score;
}
