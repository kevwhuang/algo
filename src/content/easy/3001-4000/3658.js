// 3658 - GCD of Odd and Even Sums

function gcdOfOddEvenSums(n) {
    function init() {
        res = new Uint16Array(1001);
        let acc1 = 0, acc2 = 0, cur1 = 1, cur2 = 2, i = 0;
        while (++i < 1001) {
            acc1 += cur1, acc2 += cur2, cur1 += 2, cur2 += 2;
            res[i] = gcd(acc1, acc2);
        }
    }
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    if (!this.res) init();
    return res[n];
}
