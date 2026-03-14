// 1941 - Check If All Characters Have Equal Number of Occurrences

function areOccurrencesEqual(s) {
    const B = new Map();
    for (let i = 0; i < s.length; i++) {
        B.set(s[i], B.get(s[i]) + 1 || 1);
    }
    return new Set(B.values()).size === 1;
}
