// 3982. Sum of Integers With Maximum Digit Range

function maxDigitRange(nums) {
    let res = 0;
    for (let max = 0, i = 0; i < nums.length; i++) {
        let a = 9, b = 0, cur = nums[i];
        while (cur) {
            a = Math.min(cur % 10, a);
            b = Math.max(cur % 10, b);
            cur = cur / 10 | 0;
        }
        if (b - a > max) res = nums[i], max = b - a;
        else if (b - a === max) res += nums[i];
    }
    return res;
}
