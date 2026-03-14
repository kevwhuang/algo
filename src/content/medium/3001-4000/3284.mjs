// 3284 - Sum of Consecutive Subarrays

function getSum(nums) {
    let sum = nums[0], sum1 = nums[0], sum2 = nums[0];
    let f1 = 1, f2 = 1, i = 0;
    while (++i < nums.length) {
        const num = nums[i];
        if (nums[i - 1] + 1 !== num) sum1 = f1 = 0;
        if (nums[i - 1] - 1 !== num) sum2 = f2 = 0;
        sum1 += ++f1 * num;
        sum2 += ++f2 * num;
        sum = (sum + sum1 + sum2 - num) % 1000000007;
    }
    return sum;
}
