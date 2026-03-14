// 3634 - Minimum Removals to Balance Array

function minRemoval(nums, k) {
    nums = new Uint32Array(nums).sort();
    let res = Infinity, l = 0, r = -1;
    const n = nums.length;
    while (++r < n) {
        while (k * nums[l] < nums[r]) l++;
        res = Math.min(n + l - r - 1, res);
    }
    return res;
}
