// 1822 - Sign of the Product of an Array

function arraySign(nums) {
    let sign = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return 0;
        if (nums[i] < 0) sign = -sign;
    }
    return sign;
}
