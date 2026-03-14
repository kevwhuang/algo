// 3081 - Replace Question Marks in String to Minimize Its Value

function minimizeStringValue(s) {
    const bucket = new Array(26).fill(0), n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === '?') continue;
        bucket[s.charCodeAt(i) - 97]++;
    }
    const orig = [...bucket];
    let tgt = 0, count = bucket.reduce((s, e) => s + e);
    while (count < n && ++tgt) {
        for (let i = 0; i < 26; i++) {
            if (bucket[i] >= tgt) continue;
            bucket[i]++;
            if (++count === n) break;
        }
    }
    for (let i = 0; i < 26; i++) {
        bucket[i] -= orig[i];
    }
    s = s.split('');
    for (let i = 0, j = 0; i < n; i++) {
        if (s[i] !== '?') continue;
        while (bucket[j] === 0) j++;
        bucket[j]--;
        s[i] = String.fromCharCode(j + 97);
    }
    return s.join('');
}
