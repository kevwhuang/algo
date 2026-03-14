// 2799 - Count Complete Subarrays in an Array

function countCompleteSubarrays(nums) {
    let subarrays = 0;
    const map = new Map(), tgt = new Set(nums).size;
    for (let l = 0, r = 0; r < nums.length; r++) {
        map.set(nums[r], (map.get(nums[r]) ?? 0) + 1);
        while (map.size === tgt) {
            subarrays += nums.length - r;
            const freq = map.get(nums[l]) - 1;
            if (freq) map.set(nums[l++], freq);
            else map.delete(nums[l++]);
        }
    }
    return subarrays;
}
