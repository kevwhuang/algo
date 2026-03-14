// 2099 - Find Subsequence of Length K With the Largest Sum

function maxSubsequence(nums, k) {
    nums = nums.map((e, i) => [e, i]);
    nums.sort((a, b) => b[0] - a[0]);
    nums = nums.slice(0, k);
    nums.sort((a, b) => a[1] - b[1]);
    return nums.map(e => e[0]);
}
