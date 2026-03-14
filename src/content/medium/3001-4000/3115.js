// 3115 - Maximum Prime Difference

function maximumPrimeDifference(nums) {
    const primes = new Set([
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
    let idx;
    for (let i = 0; i < nums.length && idx === undefined; i++) {
        if (primes.has(nums[i])) idx = i;
    }
    for (let i = nums.length - 1; ~i; i--) {
        if (primes.has(nums[i])) return i - idx;
    }
}
