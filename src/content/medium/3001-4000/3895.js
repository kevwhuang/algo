// 3895. Count Digit Appearances

function countDigitOccurrences(nums, digit) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        while (cur) res += cur % 10 === digit, cur = cur / 10 >> 0;
    }
    return res;
}
