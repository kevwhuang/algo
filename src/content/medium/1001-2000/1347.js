// 1347 - Minimum Number of Steps to Make Two Strings Anagram

function minSteps(s, t) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
        freqs[t.charCodeAt(i) - 97]--;
    }
    let steps = 0;
    for (let i = 0; i < 26; i++) {
        if (freqs[i] > 0) steps += freqs[i];
    }
    return steps;
}
