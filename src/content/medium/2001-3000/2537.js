// 2537 - Count the Number of Good Subarrays

function countGood(nums, k) {
    let subarrays = 0, pairs = 0;
    const map = new Map(), n = nums.length;
    for (let l = 0, r = 0; r < n; r++) {
        const freq = map.get(nums[r]) ?? 0;
        map.set(nums[r], freq + 1);
        pairs += freq;
        while (pairs >= k) {
            const nextFreq = map.get(nums[l]) - 1;
            map.set(nums[l++], nextFreq);
            subarrays += n - r;
            pairs -= nextFreq;
        }
    }
    return subarrays;
}
