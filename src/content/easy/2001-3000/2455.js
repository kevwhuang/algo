// 2455 - Average Value of Even Numbers That Are Divisible by Three

function averageValue(nums) {
    let sum = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 6) continue;
        sum += nums[i];
        count++;
    }
    return ~~(sum / count);
}
