// 2513 - Minimize the Maximum of Two Arrays

function minimizeSet(divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
    const max = (f, d1, d2 = d1) => f + Math.ceil(f / (lcm(d1, d2) - 1)) - 1;
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const f1 = uniqueCnt1, f2 = uniqueCnt2, d1 = divisor1, d2 = divisor2;
    return Math.max(max(f1, d1), max(f2, d2), max(f1 + f2, d1, d2));
}
