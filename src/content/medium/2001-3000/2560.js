// 2560 - House Robber IV

function minCapability(nums, k) {
    let l = Infinity, r = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < l) l = nums[i];
        if (nums[i] > r) r = nums[i];
    }
    while (l <= r) {
        const m = l + r >> 1;
        let rem = k, i = 0;
        while (rem && i < nums.length) {
            if (nums[i] > m) i++;
            else rem--, i += 2;
        }
        if (rem) l = m + 1;
        else r = m - 1;
    }
    return r + 1;
}
