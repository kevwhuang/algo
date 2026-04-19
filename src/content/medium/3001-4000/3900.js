// 3900. Longest Balanced Substring After One Swap

function longestBalanced(s) {
    if (!this.A1) A1 = new Int32Array(200001);
    if (!this.A2) A2 = new Int32Array(200001);
    const max = Math.max, n = s.length, nn = 2 * n;
    A1.fill(1e6, 0, nn + 2);
    A2.fill(1e6, 0, nn + 2);
    let res = 0, acc = 0, a = 0, b = 0, i = -1;
    while (++i < n) a += s[i] === '0', b += s[i] === '1';
    A1[n] = 0, a *= 2, b *= 2, i = 0;
    while (++i <= n) {
        acc += s[i - 1] === '0' ? -1 : 1;
        const ii = acc + n, j = ii - 2, k = ii + 2;
        res = max(i - A1[ii], res);
        if (j >= 0 && i - A1[j] <= a) res = max(i - A1[j], res);
        else if (j >= 0 && i - A2[j] <= a) res = max(i - A2[j], res);
        if (k <= nn && i - A1[k] <= b) res = max(i - A1[k], res);
        else if (k <= nn && i - A2[k] <= b) res = max(i - A2[k], res);
        if (A1[ii] > n) A1[ii] = i;
        else if (A2[ii] > n) A2[ii] = i;
    }
    return res;
}
