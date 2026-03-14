// 2553 - Separate the Digits in an Array

function separateDigits(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const str = String(nums[i]);
        for (let j = 0; j < str.length; j++) {
            res.push(Number(str[j]));
        }
    }
    return res;
}
