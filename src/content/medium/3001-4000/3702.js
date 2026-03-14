// 3702 - Longest Subsequence With Non-Zero Bitwise XOR

function longestSubsequence(nums) {
    const n = nums.length;
    let xor = 0, acc = 0, i = -1;
    while (++i < nums.length) xor ^= nums[i], acc += nums[i] < 1;
    return xor ? n : acc === n ? 0 : n - 1;
}
