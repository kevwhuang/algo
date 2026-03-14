// 3759 - Count Elements With at Least K Greater Values

function countElements(nums, k) {
    nums = new Uint32Array(nums).sort();
    let res = 0, r = 0;
    const n = nums.length;
    while (r < n) {
        const l = r++, tgt = nums[l];
        while (r < n && nums[r] === tgt) r++;
        if (n - r < k) break;
        res += r - l;
    }
    return res;
}
