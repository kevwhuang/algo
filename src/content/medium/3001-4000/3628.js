// 3628 - Maximum Number of Subsequences After One Inserting

function numOfSubsequences(s) {
    let acc1 = 0, acc2 = 0, acc3 = 0, acc4 = 0, acc5 = 0, acc6 = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'T') acc6++;
    }
    for (let i = 0; i < s.length; i++) {
        const t = s[i];
        if (t === 'L') acc4++;
        else if (t === 'C') acc2 += acc4, acc5++;
        else if (t === 'T') acc1 += acc2, acc3 += acc5, acc6--;
        max = Math.max(acc4 * acc6, max);
    }
    return acc1 + Math.max(acc2, acc3, max);
}
