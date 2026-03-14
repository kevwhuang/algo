// 1608 - Special Array With X Elements Greater Than or Equal X

function specialArray(nums) {
    nums = new Uint16Array(nums).sort();
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        let l = 0, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (nums[m] < i) l = m + 1;
            else if (nums[m] >= i) r = m - 1;
        }
        if (i === n - l) return i;
    }
    return -1;
}
