// 396 - Rotate Function

function maxRotateFunction(nums) {
    let acc = 0, sum = 0;
    const n = nums.length - 1;
    for (let i = 0; i <= n; i++) {
        acc += nums[i] * i;
        sum += nums[i];
    }
    let max = acc;
    for (let i = n; i; i--) {
        acc += sum - (n + 1) * nums[i];
        if (acc > max) max = acc;
    }
    return max;
}
