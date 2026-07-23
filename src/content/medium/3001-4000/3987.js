// 3987. Minimum Total Cost to Process All Elements

function minimumCost(nums, k) {
    const a = BigInt(Math.ceil((nums.reduce((s, e) => s + e) - k) / k));
    return Number(a * (a + 1n) / 2n % 1000000007n);
}
