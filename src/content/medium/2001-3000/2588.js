// 2588 - Count the Number of Beautiful Subarrays

function beautifulSubarrays(nums) {
    let subarrays = 0;
    const map = new Map([[0, 1]]);
    for (let i = 0, xor = 0; i < nums.length; i++) {
        xor ^= nums[i];
        const freq = map.get(xor) ?? 0;
        map.set(xor, freq + 1);
        subarrays += freq;
    }
    return subarrays;
}
