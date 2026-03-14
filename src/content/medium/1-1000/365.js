// 365 - Water and Jug Problem

function canMeasureWater(x, y, target) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    if (x === target || y === target || x + y === target) return true;
    if (x + y < target) return false;
    return target % gcd(y, x) === 0;
}
