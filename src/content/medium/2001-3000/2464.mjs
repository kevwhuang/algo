// 2464 - Minimum Subarrays in a Valid Split

function validSubarraySplit(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    if (nums[0] === 1 || nums.at(-1) === 1) return -1;
    const n = nums.length, dp = new Uint16Array(n).fill(2000);
    for (let i = 0; i < n; i++) {
        const right = nums[i];
        if (right === 1) continue;
        for (let j = 0; j <= i; j++) {
            const next = j ? dp[j - 1] + 1 : 1;
            if (next < dp[i] && gcd(nums[j], right) > 1) dp[i] = next;
        }
    }
    return dp[n - 1] < 2000 ? dp[n - 1] : -1;
}
