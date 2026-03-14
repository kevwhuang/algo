// 2447 - Number of Subarrays With GCD Equal to K

function subarrayGCD(nums, k) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let subarrays = 0;
    for (let i = 0; i < nums.length; i++) {
        let divisor = nums[i];
        for (let j = i; j < nums.length; j++) {
            divisor = gcd(nums[j], divisor);
            if (divisor === k) subarrays++;
            if (divisor < k) break;
        }
    }
    return subarrays;
}
