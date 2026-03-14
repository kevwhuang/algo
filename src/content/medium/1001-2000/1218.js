// 1218 - Longest Arithmetic Subsequence of Given Difference

function longestSubsequence(arr, difference) {
    let max = 1;
    const dp = new Map();
    for (let i = 0; i < arr.length; i++) {
        dp.set(arr[i], (dp.get(arr[i] - difference) ?? 0) + 1);
        max = Math.max(dp.get(arr[i]), max);
    }
    return max;
}
