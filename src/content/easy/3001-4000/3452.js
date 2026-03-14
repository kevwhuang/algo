// 3452 - Sum of Good Numbers

function sumOfGoodNumbers(nums, k) {
    let res = 0, i = -1;
    const n = nums.length;
    while (++i < n) {
        const cur = nums[i];
        if (i >= k && cur <= nums[i - k]) continue;
        if (i + k < n && cur <= nums[i + k]) continue;
        res += cur;
    }
    return res;
}
