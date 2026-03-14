// 2436 - Minimum Split Into Subarrays With GCD Greater Than One

function minimumSplits(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let subarrays = 0, i = 0;
    while (i < nums.length) {
        let cur = nums[i];
        while (++i < nums.length) {
            const next = gcd(nums[i], cur);
            if (next === 1) break;
            cur = next;
        }
        subarrays++;
    }
    return subarrays;
}
