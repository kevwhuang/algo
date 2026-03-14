// 3364 - Minimum Positive Sum Subarray

function minimumSumSubarray(nums, l, r) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    let res = Infinity;
    const n = nums.length - l + 1;
    for (let i = 0; i < n; i++) {
        const min = Math.min(i + r, nums.length);
        for (let j = i + l - 1; j < min; j++) {
            const sum = nums[j] - (i && nums[i - 1]);
            if (sum > 0) res = Math.min(sum, res);
        }
    }
    return res === Infinity ? -1 : res;
}
