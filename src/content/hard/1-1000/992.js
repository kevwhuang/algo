// 992 - Subarrays With K Different Integers

function subarraysWithKDistinct(nums, k) {
    let res = 0, l = 0, m = 0, r = -1;
    const B = new Uint16Array(nums.length + 1);
    while (++r < nums.length) {
        if (++B[nums[r]] === 1 && --k < 0) B[nums[m++]] = 0, l = m;
        if (k > 0) continue;
        while (B[nums[m]] > 1) B[nums[m++]]--;
        res += m - l + 1;
    }
    return res;
}
