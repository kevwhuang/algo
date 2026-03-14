// 2616 - Minimize the Maximum Difference of Pairs

function minimizeMax(nums, p) {
    nums = new Uint32Array(nums).sort();
    let min = 0, max = nums.at(-1) - nums[0];
    while (min <= max) {
        const m = min + max >> 1;
        let pairs = 0, i = 1;
        while (i < nums.length) {
            if (nums[i] - nums[i - 1] > m) i++;
            else pairs++, i += 2;
        }
        if (pairs < p) min = m + 1;
        else max = m - 1;
    }
    return min;
}
