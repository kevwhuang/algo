// 1390 - Four Divisors

function sumFourDivisors(nums) {
    let sum = 0;
    L: for (let i = 0; i < nums.length; i++) {
        const num = nums[i], sqrt = Math.sqrt(num);
        let divisor;
        for (let d = 2; d < sqrt; d++) {
            if (num % d) continue;
            if (divisor) continue L;
            divisor = d;
        }
        if (!divisor || Number.isInteger(sqrt)) continue;
        sum += 1 + divisor + num / divisor + num;
    }
    return sum;
}
