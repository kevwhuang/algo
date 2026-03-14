// 3685 - Subsequence Sum After Capping Elements

function subsequenceSumAfterCapping(nums, k) {
    nums = new Uint16Array(nums).sort();
    const n = nums.length;
    const res = new Array(n).fill(false);
    const dp = new Uint8Array(k + 1).fill(1, 0, 1);
    for (let i = 0, cur = 1; cur <= n; cur++) {
        while (i < n && nums[i] < cur) {
            for (let j = k; j >= nums[i]; j--) {
                if (dp[j - nums[i]]) dp[j] = 1;
            }
            i++;
        }
        const min = Math.min(n - i, k / cur);
        for (let j = 0; j <= min; j++) {
            if (dp[k - j * cur] < 1) continue;
            res[cur - 1] = true;
            break;
        }
    }
    return res;
}
