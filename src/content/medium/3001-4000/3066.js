// 3066 - Minimum Operations to Exceed Threshold Value II

function minOperations(nums, k) {
    const heap = new PriorityQueue({ compare: (a, b) => a - b });
    for (let i = 0; i < nums.length; i++) {
        heap.enqueue(nums[i]);
    }
    let ops = 0;
    while (heap.front() < k) {
        const x = heap.dequeue();
        const y = heap.dequeue();
        heap.enqueue(2 * Math.min(x, y) + Math.max(x, y));
        ops++;
    }
    return ops;
}
