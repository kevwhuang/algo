// 2599 - Make the Prefix Sum Non-Negative

function makePrefSumNonNegative(nums) {
    let ops = 0, sum = 0;
    const heap = new PriorityQueue({ compare: (a, b) => a - b });
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (nums[i] >= 0) continue;
        heap.enqueue(nums[i]);
        if (sum >= 0) continue;
        sum -= heap.dequeue();
        ops++;
    }
    return ops;
}
