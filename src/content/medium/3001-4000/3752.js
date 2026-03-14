// 3752 - Lexicographically Smallest Negated Permutation That Sums to Target

function lexSmallestNegatedPerm(n, target) {
    let acc = n * (n + 1) / 2;
    if (acc < Math.abs(target) || (acc - target) % 2) return [];
    acc -= target;
    const res = new Int32Array(n);
    let i = n + 1, l = 0, r = n - 1;
    while (--i) {
        if (i + i > acc) res[r--] = i;
        else res[l++] = -i, acc -= i + i;
    }
    return res;
}
