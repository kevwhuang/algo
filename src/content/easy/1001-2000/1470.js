// 1470 - Shuffle the Array

function shuffle(nums, n) {
    n *= 2;
    const res = new Uint16Array(n);
    for (let i = 0; i < n; i += 2) {
        res[i] = nums[i >> 1];
        if (i + 1 < n) res[i + 1] = nums[i + n >> 1];
    }
    return res;
}
