// 2778 - Sum of Squares of Special Elements

function sumOfSquares(nums) {
    let sum = 0;
    const len = nums.length;
    for (let i = 1; i <= len; i++) {
        if (len % i === 0) sum += nums[i - 1] ** 2;
    }
    return sum;
}
