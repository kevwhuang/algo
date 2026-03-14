// 3813 - Vowel Consonant Score

function vowelConsonantScore(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    let acc1 = 0, acc2 = 0, i = -1;
    while (++i < s.length) {
        const t = s[i];
        if (set.has(t)) acc1++;
        else if (t !== ' ' && isNaN(t)) acc2++;
    }
    return acc2 ? acc1 / acc2 >> 0 : 0;
}
