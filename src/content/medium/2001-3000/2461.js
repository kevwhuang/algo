// 2461 - Maximum Sum of Distinct Subarrays With Length K

function maximumSubarraySum(nums, k) {
    let window = 0;
    const map = new Map();
    for (let i = 0; i < k; i++) {
        window += nums[i];
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    let max = map.size === k ? window : 0;
    for (let i = k; i < nums.length; i++) {
        const head = nums[i], tail = nums[i - k];
        window += head - tail;
        map.set(head, (map.get(head) ?? 0) + 1);
        const nextFreq = map.get(tail) - 1;
        if (nextFreq) map.set(tail, nextFreq);
        else map.delete(tail);
        if (map.size === k) max = Math.max(window, max);
    }
    return max;
}
