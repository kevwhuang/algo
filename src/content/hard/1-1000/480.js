// 480 - Sliding Window Median

function medianSlidingWindow(nums, k) {
    const heap1 = new PriorityQueue((a, b) => b - a);
    const heap2 = new PriorityQueue((a, b) => a - b);
    for (let i = 0; i < k; i++) {
        heap1.enqueue(nums[i]);
        heap2.enqueue(heap1.dequeue());
        if (heap1.size() < heap2.size()) heap1.enqueue(heap2.dequeue());
    }
    const res = new Float64Array(nums.length - k + 1);
    res[0] = k & 1 ? heap1.front() : (heap2.front() + heap1.front()) / 2;
    const B = {};
    for (let i = k; i < nums.length; i++) {
        const prev = nums[i - k];
        let acc = prev <= res[i - k] ? -1 : 1;
        if (nums[i] <= res[i - k]) heap1.enqueue(nums[i]) && acc++;
        else heap2.enqueue(nums[i]) && acc--;
        if (acc < 0) heap1.enqueue(heap2.dequeue());
        else if (acc) heap2.enqueue(heap1.dequeue());
        B[prev] = (B[prev] ?? 0) + 1;
        while (B[heap1.front()]) B[heap1.dequeue()]--;
        while (B[heap2.front()]) B[heap2.dequeue()]--;
        if (k & 1) res[i - k + 1] = heap1.front();
        else res[i - k + 1] = (heap2.front() + heap1.front()) / 2;
    }
    return res;
}
