// 2780 - Minimum Index of a Valid Split

function minimumIndex(nums) {
    let dominant, max = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const freq = (map.get(nums[i]) ?? 0) + 1;
        map.set(nums[i], freq);
        if (freq <= max) continue;
        dominant = nums[i], max = freq;
    }
    const bound = nums.length - 1;
    for (let i = 0, l = 0, r = map.get(dominant); i < bound; i++) {
        if (nums[i] !== dominant) continue;
        l++, r--;
        if (l + l > i + 1 && r + r > bound - i) return i;
    }
    return -1;
}
