// 974 - Subarray Sums Divisible by K

function subarraysDivByK(nums, k) {
    let subarrays = 0, remainder = 0;
    const map = new Map([[0, 1]]);
    for (let i = 0; i < nums.length; i++) {
        remainder = (remainder + k + nums[i] % k) % k;
        if (map.has(remainder)) {
            subarrays += map.get(remainder);
            map.set(remainder, map.get(remainder) + 1);
        } else {
            map.set(remainder, 1);
        }
    }
    return subarrays;
}
