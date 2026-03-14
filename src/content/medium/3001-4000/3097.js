// 3097 - Shortest Subarray With OR at Least K II

function minimumSubarrayLength(nums, k) {
    let res = Infinity, or = 0, r = -1;
    while (++r < nums.length) {
        or |= nums[r];
        if (or < k) continue;
        or = 0;
        let l = r;
        while (or < k) or |= nums[l--];
        res = Math.min(r - l, res);
        or = nums[r];
        r = l + 2;
    }
    return res === Infinity ? -1 : res ? res : 1;
}
