// 3371 - Identify the Largest Outlier in an Array

function getLargestOutlier(nums) {
    let sum = 0, map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        sum += n;
        map.set(n, (map.get(n) ?? 0) + 1);
    }
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n <= max) continue;
        const tgt = (sum - n) / 2;
        if (n === tgt ? map.get(n) > 1 : map.has(tgt)) max = n;
    }
    return max;
}
