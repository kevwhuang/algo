// 484 - Find Permutation

function findPermutation(s) {
    const perm = Array.from({ length: s.length + 1 }, (_, i) => i + 1);
    for (let i = 0; i < s.length; i++) {
        let l = i;
        while (i < s.length && s[i] === 'D') i++;
        let r = i;
        while (l < r) [perm[l++], perm[r--]] = [perm[r], perm[l]];
    }
    return perm;
}
