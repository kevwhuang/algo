// 2840 - Check If Strings Can Be Made Equal With Operations II

function checkStrings(s1, s2) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i += 2) {
        freqs[s1.charCodeAt(i) - 97]++;
        freqs[s2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (freqs[i]) return false;
    }
    for (let i = 1; i < s1.length; i += 2) {
        freqs[s1.charCodeAt(i) - 97]++;
        freqs[s2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (freqs[i]) return false;
    }
    return true;
}
