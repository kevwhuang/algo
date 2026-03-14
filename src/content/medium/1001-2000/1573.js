// 1573 - Number of Ways to Split a String

function numWays(s) {
    let ones = 0, n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === '1') ones++;
    }
    if (ones === 0) return (n - 1) * (n - 2) / 2 % 1000000007;
    if (ones % 3) return 0;
    let idx1 = -1, count1 = 0;
    const tgt = ones / 3;
    while (count1 < tgt) if (s[++idx1] === '1') count1++;
    let idx4 = n, count2 = 0;
    while (count2 < tgt) if (s[--idx4] === '1') count2++;
    const idx2 = s.indexOf('1', idx1 + 1);
    const idx3 = s.lastIndexOf('1', idx4 - 1);
    return (idx2 - idx1) * (idx4 - idx3) % 1000000007;
}
