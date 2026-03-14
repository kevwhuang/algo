// 2815 - Max Pair Sum in an Array

function maxSum(nums) {
    function maxDigit(num) {
        let digit = -Infinity;
        while (num) {
            digit = Math.max(num % 10, digit);
            num = num / 10 >> 0;
        }
        return digit;
    }
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum <= max) continue;
            if (maxDigit(nums[i]) === maxDigit(nums[j])) max = sum;
        }
    }
    return max;
}
