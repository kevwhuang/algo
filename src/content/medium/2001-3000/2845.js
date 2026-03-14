// 2845 - Count of Interesting Subarrays

function countInterestingSubarrays(nums, modulo, k) {
    let subarrays = 0, acc = 0;
    const map = new Map([[0, 1]]);
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i] % modulo === k;
        acc %= modulo;
        const tgt = (acc + modulo - k) % modulo;
        if (map.has(tgt)) subarrays += map.get(tgt);
        map.set(acc, (map.get(acc) ?? 0) + 1);
    }
    return subarrays;
}
