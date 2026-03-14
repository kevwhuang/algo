// 2550 - Count Collisions of Monkeys on a Polygon

function monkeyMove(n) {
    let count = 1n, mult = 2n;
    const mod = 1000000007n;
    while (n) {
        if (n & 1) count *= mult;
        mult = (mult * mult) % mod;
        n >>= 1;
    }
    return Number((count + mod - 2n) % mod);
}
