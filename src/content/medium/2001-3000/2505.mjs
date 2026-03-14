// 2505 - Bitwise OR of All Subsequence Sums

function subsequenceSumOr(nums) {
    let or = BigInt(0), acc = BigInt(0);
    for (let i = 0; i < nums.length; i++) {
        const num = BigInt(nums[i]);
        or |= num | (acc += num);
    }
    return Number(or);
}
