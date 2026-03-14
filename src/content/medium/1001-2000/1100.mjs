// 1100 - Find K-Length Substrings With No Repeated Characters

function numKLenSubstrNoRepeats(s, k) {
    let substrings = 0;
    const freqs = new Array(26).fill(0);
    loop: for (let i = 0, count; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
        i >= k && freqs[s.charCodeAt(i - k) - 97]--;
        count = 0;
        for (let j = 0; j < 26; j++) {
            if (freqs[j] > 1) continue loop;
            freqs[j] === 1 && count++;
        }
        count === k && substrings++;
    }
    return substrings;
}
