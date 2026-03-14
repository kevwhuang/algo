// 2429 - Minimize XOR

function minimizeXor(num1, num2) {
    num1 = num1.toString(2);
    let ones = 0;
    while (num2) {
        if (num2 & 1) ones++;
        num2 >>= 1;
    }
    if (ones >= num1.length) return parseInt('1'.repeat(ones), 2);
    const res = new Uint8Array(num1.length);
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] === '0') continue;
        res[i] = 1;
        if (--ones === 0) return parseInt(res.join(''), 2);
    }
    for (let i = res.length - 1; i >= 0; i--) {
        if (num1[i] === '1') continue;
        res[i] = 1;
        if (--ones === 0) return parseInt(res.join(''), 2);
    }
}
