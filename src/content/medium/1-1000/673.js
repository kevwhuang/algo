// 673 - Number of Longest Increasing Subsequence

function findNumberOfLIS(nums) {
    let res = 0, max = 0;
    const n = nums.length;
    const dp1 = new Uint16Array(n).fill(1);
    const dp2 = new Uint32Array(n).fill(1);
    for (let r = 0; r < n; r++) {
        for (let l = 0; l < r; l++) {
            if (nums[l] >= nums[r]) continue;
            const next = dp1[l] + 1;
            if (dp1[r] > next) continue;
            if (dp1[r] === next) dp2[r] += dp2[l];
            else dp1[r] = next, dp2[r] = dp2[l];
        }
        if (dp1[r] < max) continue;
        if (dp1[r] === max) res += dp2[r];
        else res = dp2[r], max = dp1[r];
    }
    return res;
}
