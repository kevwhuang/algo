// 2450 - Number of Distinct Binary Strings After Applying Operations

function countDistinctStrings(s, k) {
    const mod = BigInt(1e9 + 7);
    return Number(2n ** BigInt(s.length - k + 1) % mod);
}
