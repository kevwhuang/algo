// 2404 - Most Frequent Even Element

function mostFrequentEven(nums) {
    let res = -1, max = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2) continue;
        const freq = map.get(nums[i]) + 1 || 1;
        if (freq > max) {
            res = nums[i];
            max = freq;
        } else if (freq === max) {
            res = Math.min(nums[i], res);
        }
        map.set(nums[i], freq);
    }
    return res;
}
