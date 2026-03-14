// 2731 - Movement of Robots

function sumDistance(nums, s, d) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += s[i] === 'R' ? d : -d;
    }
    nums.sort((a, b) => a - b);
    let sum = 0, acc = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += i * nums[i] - acc;
        sum %= 1000000007;
        acc += nums[i];
    }
    return sum;
}
