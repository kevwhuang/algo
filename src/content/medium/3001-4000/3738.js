// 3738 - Longest Non-Decreasing Subarray After Replacing at Most One Element

function longestSubarray(nums) {
    const n = nums.length, nn = n - 1;
    const ss = new Uint32Array(n).fill(1, nn);
    for (let i = n - 2; ~i; i--) {
        ss[i] = nums[i] <= nums[i + 1] ? ss[i + 1] + 1 : 1;
    }
    let res = ss[0], acc = 1;
    for (let i = 1; i < nn; i++) {
        const sum = nums[i - 1] <= nums[i + 1] ? acc + ss[i + 1] + 1 : acc + 1;
        res = Math.max(sum, ss[i] + 1, res);
        acc = nums[i - 1] <= nums[i] ? acc + 1 : 1;
    }
    return Math.max(nn ? acc + 1 : 0, res);
}
