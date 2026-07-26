// 4000. Largest Integer With Given Digit Sum

function largestInteger(n, s) {
    if (9 * n < s) return -1;
    let res = 0, i = 0;
    while (i < n) res = 10 * res + Math.min(9, s), s -= Math.min(9, s), i++;
    return res;
}
