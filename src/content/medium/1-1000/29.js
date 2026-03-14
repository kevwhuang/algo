// 29 - Divide Two Integers

function divide(dividend, divisor) {
    const quotient = Math.trunc(dividend / divisor);
    if (quotient > 2147483647) return 2147483647;
    if (quotient < -2147483647) return -2147483648;
    return quotient;
}
