// 439 - Ternary Expression Parser

function parseTernary(expression) {
    const T = true, F = false;
    const res = eval(expression);
    if (res === true) return 'T';
    if (res === false) return 'F';
    return String(res);
}
