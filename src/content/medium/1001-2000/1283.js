// 1283 - Find the Smallest Divisor Given a Threshold

function smallestDivisor(nums, threshold) {
    let l = 1, r = 1e6;
    while (l < r) {
        const m = l + r >> 1;
        const sum = nums.reduce((s, e) => s + Math.ceil(e / m), 0);
        if (sum > threshold) l = m + 1;
        else r = m;
    }
    return r;
}
