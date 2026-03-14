// 1220 - Count Vowels Permutation

function countVowelPermutation(n) {
    let a = 1, e = 1, i = 1, o = 1, u = 1, aa, ee, ii, oo, uu;
    const mod = 1000000007;
    while (--n) {
        aa = e, ee = a + i, ii = a + e + o + u, oo = i + u, uu = a;
        a = aa, e = ee % mod, i = ii % mod, o = oo % mod, u = uu;
    }
    return (a + e + i + o + u) % mod;
}
