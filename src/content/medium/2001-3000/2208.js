// 2208 - Minimum Operations to Halve Array Sum

function halveArray(nums) {
    const heap = new PriorityQueue({ compare: (a, b) => b - a });
    let halfSum = 0;
    for (let i = 0; i < nums.length; i++) {
        heap.enqueue(nums[i]);
        halfSum += nums[i];
    }
    halfSum /= 2;
    let ops = 0;
    while (halfSum > 0) {
        const halfTop = heap.dequeue() / 2;
        heap.enqueue(halfTop);
        halfSum -= halfTop;
        ops++;
    }
    return ops;
}
