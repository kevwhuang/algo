// 2947 - Count Beautiful Substrings I

function beautifulSubstrings(s, k) {
    const n = s.length, prefix = new Uint16Array(n);
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < n; i++) {
        prefix[i] = i ? prefix[i - 1] : 0;
        if (set.has(s[i])) prefix[i]++;
    }
    let substrings = 0;
    for (let i = 0; i < n; i++) {
        const pre = i ? prefix[i - 1] : 0;
        for (let j = i; j < n; j++) {
            const len = j - i + 1;
            if (len % 2) continue;
            const vowels = prefix[j] - pre;
            const consonants = len - vowels;
            if (vowels !== consonants) continue;
            if (vowels * consonants % k === 0) substrings++;
        }
    }
    return substrings;
}
