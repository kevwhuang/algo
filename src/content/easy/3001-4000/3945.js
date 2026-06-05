// 3945. Digit Frequency Score

function digitFrequencyScore(n) {
    const B = new Uint8Array(10);
    while (n) B[n % 10]++, n = n / 10 | 0;
    return B.reduce((s, e, i) => s + i * e, 0);
}
