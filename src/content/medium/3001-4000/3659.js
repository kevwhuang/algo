// 3659 - Partition Array Into K-Distinct Groups

function partitionArray(nums, k) {
    const B = new Map(), n = nums.length, tgt = n / k;
    if (tgt > tgt >> 0) return false;
    for (let i = 0; i < n; i++) {
        const next = (B.get(nums[i]) ?? 0) + 1;
        if (next > tgt) return false;
        B.set(nums[i], next);
    }
    return true;
}
