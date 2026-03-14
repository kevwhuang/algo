// 372 - Super Pow

function superPow(a, b) {
    function power(base, exp) {
        let res = 1;
        while (exp--) res = (res * base) % 1337;
        return res;
    }
    return b.reduce((s, exp) => (power(s, 10) * power(a, exp)) % 1337, 1);
}
