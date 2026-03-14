// 3749 - Evaluate Valid Expressions

function evaluateExpression(expression) {
    const S = [], n = expression.length;
    let i = 0;
    while (i < n) {
        const s = expression[i];
        if (s === '(' || s === ',') {
            i++;
        } else if (s >= 'a' && s <= 's') {
            S.push(s);
            i += 3;
        } else if (s === ')') {
            const b = S.pop(), a = S.pop(), t = S.pop();
            if (t === 'a') S.push(a + b);
            else if (t === 's') S.push(a - b);
            else if (t === 'm') S.push(a * b);
            else S.push(a / b);
            i++;
        } else {
            let flag, next = 0;
            if (s === '-') flag = true, i++;
            while (i < n && !isNaN(expression[i])) {
                next = 10 * next + Number(expression[i++]);
            }
            S.push(flag ? -next : next);
        }
    }
    return S[0];
}
