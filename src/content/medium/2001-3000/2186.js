// 2186 - Minimum Number of Steps to Make Two Strings Anagram II

function minSteps(s, t) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        freqs[t.charCodeAt(i) - 97]--;
    }
    return freqs.reduce((s, e) => s + Math.abs(e), 0);
}
