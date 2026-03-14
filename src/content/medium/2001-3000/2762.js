// 2762 - Continuous Subarrays

function continuousSubarrays(nums) {
    let subarrays = 0;
    const map = new Map();
    for (let l = 0, r = 0; r < nums.length; r++) {
        map.set(nums[r], (map.get(nums[r]) ?? 0) + 1);
        while (map.size > 1) {
            let min = 1e9, max = 1;
            for (const num of map.keys()) {
                if (num < min) min = num;
                if (num > max) max = num;
            }
            if (max - min <= 2) break;
            const freq = map.get(nums[l]) - 1;
            if (freq) map.set(nums[l++], freq);
            else map.delete(nums[l++]);
        }
        subarrays += r - l + 1;
    }
    return subarrays;
}
