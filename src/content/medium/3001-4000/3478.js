// 3478 - Choose K Elements With Maximum Sum

function findMaxSum(nums1, nums2, k) {
    const n = nums1.length;
    const res = new Array(n);
    const heap = new PriorityQueue((a, b) => a - b);
    const arr = Array.from({ length: n }, (_, i) => i);
    arr.sort((a, b) => nums1[a] - nums1[b]);
    for (let acc = 0, i = 0, j = 0; i < n; i++) {
        const cur = nums1[arr[i]];
        while (cur > nums1[arr[j]]) {
            heap.enqueue(nums2[arr[j]]);
            acc += nums2[arr[j++]];
            if (heap.size() > k) acc -= heap.dequeue();
        }
        res[arr[i]] = acc;
    }
    return res;
}
