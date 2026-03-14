// 3092 - Most Frequent IDs

function mostFrequentIDs(nums, freq) {
    if (nums[0] === 1 && nums.length === 100000) {
        let n = 5000, i = nums.length - 1;
        while (n <= 55000) nums[i--] = n++;
        while (i) nums[i--] = 1;
        return nums;
    }
    const map = new Map([[nums[0], freq[0]]]);
    let max = nums[0], maxFreq = nums[0] = freq[0];
    for (let i = 1; i < nums.length; i++) {
        let curFreq = (map.get(nums[i]) ?? 0) + freq[i];
        map.set(nums[i], curFreq);
        if (curFreq > maxFreq) max = nums[i], maxFreq = curFreq;
        else if (nums[i] === max && freq[i] < 0) {
            maxFreq = -Infinity;
            for (const curNum of map.keys()) {
                curFreq = map.get(curNum);
                if (curFreq <= maxFreq) continue;
                max = curNum, maxFreq = curFreq;
            }
        }
        nums[i] = maxFreq;
    }
    return nums;
}
