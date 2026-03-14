// 3754 - Concatenate Non-Zero Digits and Multiply by Sum I

function sumAndMultiply(n) {
    let acc1 = 0, acc2 = 0, k = 1;
    while (n) {
        if (n % 10) acc1 += k * (n % 10), acc2 += n % 10, k *= 10;
        n = n / 10 >> 0;
    }
    return acc1 * acc2;
}
