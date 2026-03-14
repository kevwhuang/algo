// 2654 - Minimum Number of Operations to Make All Array Elements Equal to 1

function minOperations(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let ones = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) ones++;
    }
    if (ones) return len - ones;
    let ops = -1;
    while (++ops < len) {
        for (let i = 1; i < len; i++) {
            const div = gcd(nums[i - 1], nums[i]);
            if (div === 1) return len + ops;
            nums[i - 1] = div;
        }
    }
    return -1;
}
