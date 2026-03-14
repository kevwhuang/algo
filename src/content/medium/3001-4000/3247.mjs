// 3247 - Number of Subsequences With Odd Sum

function subsequenceCount(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) continue;
        return Number(2n ** BigInt(nums.length - 1) % 1000000007n);
    }
    return 0;
}
