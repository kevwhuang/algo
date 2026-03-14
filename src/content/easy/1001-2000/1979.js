// 1979 - Find Greatest Common Divisor of Array

function findGCD(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let min = nums[0], max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        min = Math.min(nums[i], min);
        max = Math.max(nums[i], max);
    }
    return gcd(min, max);
}
