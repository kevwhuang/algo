// 1447 - Simplified Fractions

function simplifiedFractions(n) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const fractions = [];
    for (let denominator = 2; denominator <= n; denominator++) {
        for (let numerator = 1; numerator < denominator; numerator++) {
            if (gcd(numerator, denominator) !== 1) continue;
            fractions.push(`${numerator}/${denominator}`);
        }
    }
    return fractions;
}
