// 3467 - Transform Array by Parity

function transformArray(nums) {
    let acc = 0, i = nums.length - 1;
    while (~i) nums[i--] % 2 === 0 && acc++;
    i = nums.length - 1;
    while (i >= acc) nums[i--] = 1;
    while (~i) nums[i--] = 0;
    return nums;
}
