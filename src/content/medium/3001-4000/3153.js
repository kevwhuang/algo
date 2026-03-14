// 3153 - Sum of Digit Differences of All Pairs

function sumDigitDifferences(nums) {
    let len = 0, num = nums[0];
    while (num) len++, num = num / 10 >> 0;
    const mat = Array.from({ length: len }, () => new Array(10).fill(0));
    for (let i = 0; i < nums.length; i++) {
        let digit = 0, num = nums[i];
        while (num) {
            mat[digit++][num % 10]++;
            num = num / 10 >> 0;
        }
    }
    let sum = 0;
    for (let digit = 0; digit < len; digit++) {
        const arr = mat[digit];
        const total = arr.reduce((s, e) => s + e);
        for (let n = 0; n < 10; n++) {
            sum += arr[n] * (total - arr[n]);
        }
    }
    return sum / 2;
}
