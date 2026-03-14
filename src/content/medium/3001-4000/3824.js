// 3824 - Minimum K to Reduce Array Within Limit

function minimumK(nums) {
    let l = 1, r = 2168;
    while (l <= r) {
        const m = l + r >> 1;
        const sum = nums.reduce((s, e) => s + Math.ceil(e / m), 0);
        if (sum > m * m) l = m + 1;
        else r = m - 1;
    }
    return l;
}
