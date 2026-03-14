// 2190 - Most Frequent Number Following Key in an Array

function mostFrequent(nums, key) {
    let max, maxFreq = 0;
    const map = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== key) continue;
        const next = nums[i + 1];
        const freq = map.get(next) + 1 || 1;
        map.set(next, freq);
        if (freq <= maxFreq) continue;
        max = next;
        maxFreq = freq;
    }
    return max;
}
