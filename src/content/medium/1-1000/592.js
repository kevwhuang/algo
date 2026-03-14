// 592 - Fraction Addition and Subtraction

function fractionAddition(expression) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    const s = expression[0] === '-' ? expression : '+' + expression;
    const arr1 = [], arr2 = [];
    let i = 0;
    while (i < s.length) {
        let end1, end2, j = i;
        while (++j < s.length && (!end1 || !end2)) {
            const t = s[j];
            if (t === '/') end1 = j;
            else if (t === '+' || t === '-') end2 = j;
        }
        end2 ??= s.length;
        arr1.push(Number(s.slice(i, end1)));
        arr2.push(Number(s.slice(end1 + 1, end2)));
        i = end2;
    }
    let cur = 1;
    for (let i = 0; i < arr2.length; i++) {
        cur = lcm(arr2[i], cur);
    }
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] *= cur / arr2[i];
    }
    const a = arr1.reduce((s, e) => s + e);
    const b = Math.abs(gcd(a, cur));
    return `${a / b}/${cur / b}`;
}
