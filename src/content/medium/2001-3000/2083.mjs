// 2083 - Substrings That Begin and End With the Same Letter

function numberOfSubstrings(s) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
    }
    let substrings = 0;
    for (let i = 0; i < 26; i++) {
        if (freqs[i] === 0) continue;
        substrings += (freqs[i] + freqs[i] ** 2) / 2;
    }
    return substrings;
}
