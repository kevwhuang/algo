// 3177 - Find the Maximum Length of a Good Subsequence II

function maximumLength(nums, k) {
    const map = new Map(), dp1 = new Uint16Array(k + 1);
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], new Uint16Array(k + 1));
        const dp2 = map.get(nums[i]);
        for (let j = Math.min(k, i + 1); ~j; j--) {
            dp2[j] = Math.max(j ? dp1[j - 1] : 0, dp2[j]) + 1;
            dp1[j] = Math.max(dp2[j], dp1[j]);
        }
    }
    return dp1[k];
}
