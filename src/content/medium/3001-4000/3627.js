// 3627 - Maximum Median Sum of Subsequences of Size 3

function maximumMedianSum(nums) {
    const max = nums.reduce((s, e) => Math.max(e, s));
    const arr = new (max < 65536 ? Uint16Array : Uint32Array)(nums).sort();
    let res = 0, n = arr.length / 3, i = arr.length - 2;
    while (n--) res += arr[i], i -= 2;
    return res;
}
