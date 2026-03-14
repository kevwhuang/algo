// 2470 - Number of Subarrays With LCM Equal to K

function subarrayLCM(nums, k) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let subarrays = 0;
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        for (let j = i; j < nums.length; j++) {
            cur = lcm(cur, nums[j]);
            if (cur > k) break;
            if (cur === k) subarrays++;
        }
    }
    return subarrays;
}
