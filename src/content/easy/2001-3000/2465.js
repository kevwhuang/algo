// 2465 - Number of Distinct Averages

function distinctAverages(nums) {
    nums.sort((a, b) => a - b);
    const set = new Set();
    let l = 0, r = nums.length - 1;
    while (l < r) set.add((nums[l++] + nums[r--]) / 2);
    return set.size;
}
