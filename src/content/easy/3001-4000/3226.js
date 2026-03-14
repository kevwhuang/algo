// 3226 - Number of Bit Changes to Make Two Integers Equal

function minChanges(n, k) {
    let res = 0;
    while (n && k) {
        if (!(n & 1) && k & 1) return -1;
        if (n & 1 && !(k & 1)) res++;
        n >>= 1, k >>= 1;
    }
    if (k) return -1;
    while (n) res += n & 1, n >>= 1;
    return res;
}
