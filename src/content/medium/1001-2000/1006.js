// 1006 - Clumsy Factorial

function clumsy(n) {
    let sum = 0, mult = n, op = 0;
    while (--n) {
        if (op === 0) {
            mult *= n;
            op = 1;
        } else if (op === 1) {
            mult = ~~(mult / n);
            op = 2;
        } else if (op === 2) {
            sum += mult + n;
            mult = 0;
            op = 3;
        } else {
            mult = -n;
            op = 0;
        }
    }
    return sum + mult;
}
