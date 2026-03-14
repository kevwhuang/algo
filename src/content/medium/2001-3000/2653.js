// 2653 - Sliding Subarray Beauty

function getSubarrayBeauty(nums, k, x) {
    function beauty(index) {
        let count = 0;
        for (let n = 0; n < 50; n++) {
            count += bucket[n];
            if (count >= x) return res[index] = n - 50;
        }
    }
    const bucket = new Array(50).fill(0);
    for (let i = 0; i < k; i++) {
        const num = nums[i] + 50;
        if (num < 50) bucket[num]++;
    }
    const res = new Int8Array(nums.length - k + 1);
    beauty(0);
    for (let i = k; i < nums.length; i++) {
        const head = nums[i] + 50;
        if (head < 50) bucket[head]++;
        const tail = nums[i - k] + 50;
        if (tail < 50) bucket[tail]--;
        beauty(i - k + 1);
    }
    return res;
}
