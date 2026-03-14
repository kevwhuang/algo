// 3258 - Count Substrings That Satisfy K-Constraint I

function countKConstraintSubstrings(s, k) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        for (let acc1 = 0, acc2 = 0, j = i; j < s.length; j++) {
            s[j] === '0' ? acc1++ : acc2++;
            if (acc1 <= k || acc2 <= k) res++;
        }
    }
    return res;
}
