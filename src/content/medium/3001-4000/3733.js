// 3733 - Minimum Time to Complete All Deliveries

function minimumTime(d, r) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const div = lcm(r[0], r[1]);
    let l = 2, rr = 4e9;
    while (l <= rr) {
        const m = Math.floor((l + rr) / 2);
        const a = m / r[0] >> 0, b = m / r[1] >> 0, c = m / div >> 0;
        if (m - a < d[0] || m - b < d[1] || m - c < d[0] + d[1]) l = m + 1;
        else rr = m - 1;
    }
    return l;
}
