// 2222 - Number of Ways to Select Buildings

function numberOfWays(s) {
    let res = 0, a = 0, b = 0, ab = 0, ba = 0, i = -1;
    while (++i < s.length) {
        if (s[i] === '0') res += ab, a++, ba += b;
        else res += ba, b++, ab += a;
    }
    return res;
}
