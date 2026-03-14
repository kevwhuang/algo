// 1704 - Determine If String Halves Are Alike

function halvesAreAlike(s) {
    let res = 0;
    const dict = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    const n = s.length / 2;
    for (let i = 0, j = n; i < n; i++, j++) {
        if (dict.has(s[i])) res++;
        if (dict.has(s[j])) res--;
    }
    return res === 0;
}
