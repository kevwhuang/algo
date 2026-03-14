// 1201 - Ugly Number III

function nthUglyNumber(n, a, b, c) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const get = div => m / div >> 0;
    const lcmAB = lcm(a, b), lcmAC = lcm(a, c), lcmBC = lcm(b, c);
    const lcmABC = lcm(lcmAB, c);
    let l = 1, r = 2e9, m;
    while (l < r) {
        m = Math.floor((l + r) / 2);
        let count = get(a) + get(b) + get(c) + get(lcmABC);
        count -= get(lcmAB) + get(lcmAC) + get(lcmBC);
        count < n ? l = m + 1 : r = m;
    }
    return r;
}
