// 3334 - Find the Maximum Factor Score of Array

function maxScore(nums) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const B = new Uint8Array(31);
    let l0 = 1, g0 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (++B[nums[i]] !== 2) continue;
        l0 = lcm(l0, nums[i]);
        g0 = gcd(g0, nums[i]);
    }
    let max;
    for (let a = 1; a < 31; a++) {
        if (B[a] === 0) continue;
        let l = l0, g = g0;
        for (let b = 1; b < 31; b++) {
            if (B[b] === 0 || a === b) continue;
            l = lcm(l, b);
            g = gcd(g, b);
        }
        max ??= lcm(l, a) * gcd(g, a);
        max = Math.max(l * g, max);
    }
    return max;
}
