// 2530 - Maximal Score After Applying K Operations

function maxKelements(nums, k) {
    const heap = new PriorityQueue({ compare: (a, b) => b - a });
    for (let i = 0; i < nums.length; i++) {
        heap.enqueue(nums[i]);
    }
    let score = 0;
    while (k--) {
        const val = heap.dequeue();
        heap.enqueue(Math.ceil(val / 3));
        score += val;
    }
    return score;
}
