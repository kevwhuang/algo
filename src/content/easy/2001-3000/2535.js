// 2535 - Difference Between Element Sum and Digit Sum of an Array

function differenceOfSum(nums) {
    let elementSum = 0, digitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
        const str = String(nums[i]);
        for (let j = 0; j < str.length; j++) {
            digitSum += parseInt(str[j]);
        }
    }
    return Math.abs(elementSum - digitSum);
}
