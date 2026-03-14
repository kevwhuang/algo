// 3005 - Count Elements With Maximum Frequency

function maxFrequencyElements(nums) {
    const B = new Array(101).fill(0);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(++B[nums[i]], max);
    }
    let res = 0;
    for (let i = 1; i < 101; i++) {
        if (B[i] === max) res += max;
    }
    return res;
}
