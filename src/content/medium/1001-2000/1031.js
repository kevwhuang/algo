// 1031 - Maximum Sum of Two Non-Overlapping Subarrays

function maxSumTwoNoOverlap(nums, firstLen, secondLen) {
    let acc = 0, i = 0;
    while (i < firstLen) acc += nums[i++];
    const n = nums.length;
    const prefix = new Uint32Array(n);
    while (i < nums.length) {
        prefix[i] = Math.max(acc, prefix[i - 1]);
        acc += nums[i] - nums[i++ - firstLen];
    }
    acc = 0, i = n - 1;
    while (i >= n - firstLen) acc += nums[i--];
    const suffix = new Uint32Array(n);
    while (~i) {
        suffix[i] = Math.max(acc, suffix[i + 1]);
        acc += nums[i] - nums[i-- + firstLen];
    }
    acc = 0, i = 0;
    while (i < secondLen) acc += nums[i++];
    let res = acc + suffix[secondLen - 1];
    while (i < n) {
        acc += nums[i] - nums[i - secondLen];
        const max = Math.max(prefix[i - secondLen + 1], suffix[i++]);
        res = Math.max(acc + max, res);
    }
    return res;
}
