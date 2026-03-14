// 3781 - Maximum Score After Binary Swaps

function maximumScore(nums, s) {
    let res = 0;
    const heap = new PriorityQueue((a, b) => b - a);
    for (let i = 0; i < s.length; i++) {
        heap.enqueue(nums[i]);
        if (s[i] === '1') res += heap.dequeue();
    }
    return res;
}
