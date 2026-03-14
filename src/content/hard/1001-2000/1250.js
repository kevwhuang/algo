// 1250 - Check If It Is a Good Array

function isGoodArray(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let acc = nums[0], i = 0;
    while (++i < nums.length) {
        acc = gcd(acc, nums[i]);
        if (acc === 1) return true;
    }
    return acc === 1;
}
