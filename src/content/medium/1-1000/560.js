// 560 - Subarray Sum Equals K

function subarraySum(nums, k) {
    let subarrays = 0, acc = 0;
    const map = new Map([[0, 1]]);
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        subarrays += map.get(acc - k) ?? 0;
        map.set(acc, (map.get(acc) ?? 0) + 1);
    }
    return subarrays;
}
