// 3747 - Count Distinct Integers After Removing Zeros

function countDistinct(n) {
    let res = -1, acc = 1, pow = 1;
    while (n) {
        res += pow;
        acc = n % 10 ? acc + (n % 10 - 1) * pow : 0;
        pow *= 9;
        n = Math.floor(n / 10);
    }
    return res + acc;
}
