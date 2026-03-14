// 1403 - Minimum Subsequence in Non-Increasing Order

function minSubsequence(nums) {
    const arr = new Uint8Array(nums).sort().reverse();
    let left = 0, right = arr.reduce((s, e) => s + e), i = 0;
    while (left <= right) left += arr[i], right -= arr[i], i++;
    return arr.slice(0, i);
}
