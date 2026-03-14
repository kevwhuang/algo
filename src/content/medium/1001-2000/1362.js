// 1362 - Closest Divisors

function closestDivisors(num) {
    let n1, n2, d = ~~(++num ** .5);
    while (!n1) !(num % d--) && (n1 = ++d);
    d = ~~(++num ** .5);
    while (!n2) !(num % d--) && (n2 = ++d);
    const m2 = num / n2, m1 = (num - 1) / n1;
    return m2 - n2 < m1 - n1 ? [n2, m2] : [n1, m1];
}
