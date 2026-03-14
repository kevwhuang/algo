// 1922 - Count Good Numbers

function countGoodNumbers(n) {
    function power(mult, cur) {
        let pow = 1n;
        while (cur) {
            if (cur & 1) pow = (pow * mult) % mod;
            mult = (mult * mult) % mod;
            cur = Math.floor(cur / 2);
        }
        return pow;
    }
    const odd = Math.floor(n / 2), even = n - odd;
    const mod = 1000000007n;
    return Number((power(4n, odd) * power(5n, even)) % mod);
}
