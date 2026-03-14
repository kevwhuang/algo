// 2261 - K Divisible Elements Subarrays

function countDistinct(nums, k, p) {
    function count() {
        initHash = (initHash * base + nums[size - 1]) % prime;
        if (nums[size - 1] % p === 0) initCount++;
        if (size > 1) initMask = initMask * base % prime;
        let hash = initHash, count = initCount, mask = initMask;
        const set = new Set();
        if (count <= k) set.add(hash);
        for (let i = size; i < len; i++) {
            hash = (hash - nums[i - size] * mask) % prime + prime;
            hash = (hash * base + nums[i]) % prime;
            if (nums[i - size] % p === 0) count--;
            if (nums[i] % p === 0) count++;
            if (count <= k) set.add(hash);
        }
        return set.size;
    }
    let subarrays = 0, size = 0;
    let initHash = 0, initCount = 0, initMask = 1;
    const len = nums.length, base = 201, prime = 1e9 + 9;
    while (++size <= len) subarrays += count();
    return subarrays;
}
