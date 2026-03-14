// 2521 - Distinct Prime Factors of Product of Array

function distinctPrimeFactors(nums) {
    const primes = new Set();
    for (let i = 0; i < nums.length; i++) {
        let dividend = nums[i];
        while (dividend % 2 === 0) dividend /= 2;
        if (dividend !== nums[i]) primes.add(2);
        let divisor = 3;
        while (dividend >= 3) {
            if (dividend % divisor) divisor += 2;
            else (dividend /= divisor) && primes.add(divisor);
        }
    }
    return primes.size;
}
