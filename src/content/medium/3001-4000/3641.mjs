// 3641 - Longest Semi-Repeating Subarray

function longestSubarray(nums, k) {
    if (!this.B) B = new Uint32Array(100001);
    let res = 0, acc = 0, l = 0, r = -1;
    nums.forEach(e => B[e] = 0);
    while (++r < nums.length) {
        if (++B[nums[r]] === 2) acc++;
        while (acc > k) --B[nums[l++]] === 1 && acc--;
        res = Math.max(r - l, res);
    }
    return res + 1;
}
