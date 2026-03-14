// 3763 - Maximum Total Sum With Threshold Constraints

function maxSum(nums, threshold) {
    const n = nums.length;
    const arr = Array.from({ length: n }, (_, i) => i);
    arr.sort((a, b) => threshold[a] - threshold[b]);
    let res = 0, i = -1;
    while (++i < n && threshold[arr[i]] <= i + 1) res += nums[arr[i]];
    return res;
}
