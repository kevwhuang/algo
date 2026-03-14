// 1695 - Maximum Erasure Value

function maximumUniqueSubarray(nums) {
    let max = 1, window = 0;
    const bucket = new Array(10001).fill(0);
    for (let l = 0, r = 0; r < nums.length; r++) {
        const num = nums[r];
        window += num;
        bucket[num]++;
        while (bucket[num] > 1) {
            window -= nums[l];
            bucket[nums[l++]]--;
        }
        max = Math.max(window, max);
    }
    return max;
}
