// 1106 - Parsing a Boolean Expression

function parseBoolExpr(expression) {
    const fn1 = (...args) => args.reduce((s, e) => s & e);
    const fn2 = (...args) => args.reduce((s, e) => s | e);
    const t = true, f = false;
    return eval(expression.replaceAll('&', 'fn1').replaceAll('|', 'fn2'));
}
