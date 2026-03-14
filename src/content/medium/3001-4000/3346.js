// 3346 - Maximum Frequency of an Element After Performing Operations I

function maxFrequency(nums, k, numOperations) {
    const min = Math.min(...nums);
    const n = Math.max(...nums) - min + 2;
    const ps = new Uint32Array(n);
    nums.forEach(e => ps[e - min + 1]++);
    let max = 1, i = 1, j = 0;
    while (++i < n) ps[i] += ps[i - 1];
    while (++j < n) {
        const f = ps[j] - ps[j - 1] + numOperations;
        const d = ps[Math.min(j + k, n - 1)] - ps[Math.max(j - k - 1, 0)];
        max = Math.max(Math.min(f, d), max);
    }
    return max;
}
