// 3039 - Apply Operations to Make String Empty

function lastNonEmptyString(s) {
    const bucket = new Array(26).fill(0);
    const lastSeen = new Array(26);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        bucket[code]++;
        lastSeen[code] = i;
    }
    const res = [], max = Math.max(...bucket);
    for (let i = 0; i < 26; i++) {
        if (bucket[i] === max) res.push(i);
    }
    res.sort((a, b) => lastSeen[a] - lastSeen[b]);
    for (let i = 0; i < res.length; i++) {
        res[i] = String.fromCharCode(res[i] + 97);
    }
    return res.join('');
}
