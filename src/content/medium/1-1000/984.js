// 984 - String Without AAA or BBB

function strWithout3a3b(a, b) {
    let res = '';
    const char1 = a >= b ? 'a' : 'b';
    const char2 = a >= b ? 'b' : 'a';
    const increment = char1 + char1 + char2;
    if (a < b) [a, b] = [b, a];
    while (a && b && a !== b) {
        res += increment;
        a -= 2, b--;
    }
    if (a === 1 && b === 0) return res + char1;
    if (a === 2 && b === 0) return res + char1 + char1;
    return res + (char1 + char2).repeat(a);
}
