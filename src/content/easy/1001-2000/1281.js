// 1281 - Subtract the Product and Sum of Digits of an Integer

function subtractProductAndSum(n) {
    n = String(n);
    let prod = 1, sum = 0;
    for (let i = 0; i < n.length; i++) {
        const digit = Number(n[i]);
        prod *= digit, sum += digit;
    }
    return prod - sum;
}
