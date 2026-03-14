// 3411 - Maximum Subarray With Equal Products

function maxLength(nums) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let res = 1;
    for (let i = 0; i < nums.length; i++) {
        let prod = nums[i], a = nums[i], b = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            prod *= nums[j], a = lcm(nums[j], a), b = gcd(nums[j], b);
            if (prod !== a * b) break;
            res = Math.max(j - i + 1, res);
        }
    }
    return res;
}
