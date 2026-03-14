// 416 - Partition Equal Subset Sum

function canPartition(nums) {
    const sum = nums.reduce((s, e) => s + e);
    if (sum & 1) return false;
    let mask = 1n << BigInt(sum / 2);
    nums.forEach(e => mask |= mask >> BigInt(e));
    return mask & 1n;
}
