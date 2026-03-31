// 3884. First Matching Character From Both Ends

function firstMatchingIndex(s) {
    const n = s.length, nn = n >> 1;
    for (let i = 0; i <= nn; i++) {
        if (s[i] === s[n - i - 1]) return i;
    }
    return -1;
}
