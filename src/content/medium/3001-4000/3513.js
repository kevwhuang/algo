// 3513 - Number of Unique XOR Triplets I

function uniqueXorTriplets(nums) {
    const n = nums.length;
    return n < 3 ? n : 2 ** (32 - Math.clz32(n));
}
