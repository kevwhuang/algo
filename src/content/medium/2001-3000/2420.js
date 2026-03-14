// 2420 - Find All Good Indices

function goodIndices(nums, k) {
    const n = nums.length, nn = n - k, ss = new Uint32Array(n).fill(1);
    for (let i = n - 2; ~i; i--) {
        if (nums[i] <= nums[i + 1]) ss[i] += ss[i + 1];
    }
    const res = [];
    for (let acc = 1, i = 1; i < nn; i++) {
        if (acc >= k && ss[i + 1] >= k) res.push(i);
        acc = nums[i - 1] >= nums[i] ? acc + 1 : 1;
    }
    return res;
}
