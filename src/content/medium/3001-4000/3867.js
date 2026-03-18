// 3867. Sum of GCD of Formed Pairs

function gcdSum(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const pre = new Uint32Array(nums.length);
    for (let max = 0, i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max);
        pre[i] = gcd(nums[i], max);
    }
    pre.sort();
    let res = 0;
    for (let l = 0, r = pre.length - 1; l < r; l++, r--) {
        res += gcd(pre[l], pre[r]);
    }
    return res;
}
