// 2364 - Count Number of Bad Pairs

function countBadPairs(nums) {
    let good = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i] - i;
        if (map.has(diff)) {
            good += map.get(diff);
            map.set(diff, map.get(diff) + 1);
        } else {
            map.set(diff, 1);
        }
    }
    return nums.length * (nums.length - 1) / 2 - good;
}
