// 166 - Fraction to Recurring Decimal

function fractionToDecimal(numerator, denominator) {
    if (numerator === 0) return '0';
    let res = Math.sign(numerator) === Math.sign(denominator) ? '' : '-';
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    res += Math.floor(numerator / denominator);
    let remainder = numerator % denominator;
    if (remainder === 0) return res;
    res += '.';
    const map = new Map();
    while (remainder) {
        map.set(remainder, res.length);
        remainder *= 10;
        res += Math.floor(remainder / denominator);
        remainder %= denominator;
        if (!map.has(remainder)) continue;
        const index = map.get(remainder);
        return `${res.slice(0, index)}(${res.slice(index)})`;
    }
    return res;
}
