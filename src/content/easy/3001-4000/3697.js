// 3697 - Compute Decimal Representation

function decimalRepresentation(n) {
    const res = [];
    let k = 1;
    while (n) {
        if (n % 10) res.push(n % 10 * k);
        n = n / 10 >> 0, k *= 10;
    }
    return res.reverse();
}
