// 625 - Minimum Factorization

function smallestFactorization(num) {
    if (num === 1) return 1;
    let res = 0;
    for (let k = 9, mult = 1; k > 1; k--) {
        while (num > 1 && num % k === 0) {
            res += mult * k;
            mult *= 10;
            num /= k;
        }
    }
    return num === 1 && res <= 2147483647 ? res : 0;
}
