// 2841 - Maximum Sum of Almost Unique Subarray

function maxSum(nums, m, k) {
    let window = 0;
    const map = new Map();
    for (let i = 0; i < k; i++) {
        window += nums[i];
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    let max = map.size >= m ? window : 0;
    for (let i = k; i < nums.length; i++) {
        const head = nums[i], tail = nums[i - k];
        window += head - tail;
        map.set(head, (map.get(head) ?? 0) + 1);
        const freq = map.get(tail) - 1;
        if (freq) map.set(tail, freq);
        else map.delete(tail);
        if (map.size >= m) max = Math.max(window, max);
    }
    return max;
}
