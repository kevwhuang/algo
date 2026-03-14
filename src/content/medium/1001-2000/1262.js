// 1262 - Greatest Sum Divisible by Three

function maxSumDivThree(nums) {
    let sum = 0, a1 = 1000, b1 = 1000, a2 = 1000, b2 = 1000;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        sum += num;
        if (num % 3 === 2) {
            if (num < a2) b2 = a2, a2 = num;
            else if (num < b2) b2 = num;
        } else if (num % 3 === 1) {
            if (num < a1) b1 = a1, a1 = num;
            else if (num < b1) b1 = num;
        }
    }
    if (sum % 3 === 2) sum -= Math.min(a1 + b1, a2);
    if (sum % 3 === 1) sum -= Math.min(a1, a2 + b2);
    return sum;
}
