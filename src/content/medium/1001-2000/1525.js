// 1525 - Number of Good Ways to Split a String

function numSplits(s) {
    const right = new Map();
    for (let i = 0; i < s.length; i++) {
        right.set(s[i], right.get(s[i]) + 1 || 1);
    }
    let splits = 0;
    const left = new Map(), bound = s.length - 1;
    for (let i = 0; i < bound; i++) {
        left.set(s[i], left.get(s[i]) + 1 || 1);
        const nextFreq = right.get(s[i]) - 1;
        if (nextFreq) right.set(s[i], nextFreq);
        else right.delete(s[i]);
        if (left.size === right.size) splits++;
    }
    return splits;
}
