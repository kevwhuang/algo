// 3663 - Find the Least Frequent Digit

function getLeastFrequentDigit(n) {
    const B = new Uint8Array(10);
    while (n) B[n % 10]++, n = n / 10 >> 0;
    let res = 0, i = 0;
    while (++i < 10) if ((B[i] || 100) < (B[res] || 100)) res = i;
    return res;
}
