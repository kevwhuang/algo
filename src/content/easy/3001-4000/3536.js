// 3536 - Maximum Product of Two Digits

function maxProduct(n) {
    let a = 0, b = 0;
    while (n) {
        const cur = n % 10;
        if (cur > a) b = a, a = cur;
        else if (cur > b) b = cur;
        n = n / 10 >> 0;
    }
    return a * b;
}
