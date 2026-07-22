// 3993. Maximum Value of an Alternating Sequence

function maximumValue(n, s, m) {
    return n === 1 ? s : s + m + (n - 2 >> 1) * (m - 1);
}
